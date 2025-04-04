import { json, type RequestHandler } from "@sveltejs/kit";
import type { Type } from "arktype";
import { type } from "arktype";

type AddParam<F, U> = F extends (...args: infer A) => infer R 
  ? (...args: [...A, U]) => R 
  : never;

const needAuth = (cb: RequestHandler): RequestHandler => {
	return (...args) => {
		const { locals } = args[0];
		if (!locals.userData) {
			return json({
				"error": "not authenticated"
			}, { status: 401 });
		}

		return cb(...args);
	}
}

const withValidatedInput = <T extends Type, G extends RequestHandler>(typeToUse: T, cb: AddParam<G, T['infer']>): RequestHandler => {
	return async (...args) => {
		const { request } = args[0];
		
		const data = await request.json();
		const validationResult = typeToUse(data);
		if (validationResult instanceof type.errors) {
			return json({
				"error": validationResult.summary
			}, { status: 400 });
		}

		return await cb(...args, data);
	}
}

export { needAuth, withValidatedInput };