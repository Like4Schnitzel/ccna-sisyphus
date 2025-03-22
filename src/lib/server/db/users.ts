import db from ".";
import bcrypt from 'bcrypt';

type UserRole = "user" | "admin";

interface User { 
	uuid: string,
	username: string,
	role: UserRole
};

const hashPassword = async (password: string) => await bcrypt.hash(password, 12); 

// TODO(f): fix race condition
const createUser = async (username: string, password: string, role: UserRole): Promise<User> => {
	// check if user exists
	const userExistsCheck = db.prepare("SELECT 1 FROM users WHERE name = ?")
		.get(username);	

	if (userExistsCheck) throw new Error(`User with username ${username} already exists`);
	const hashedPassword = await hashPassword(password);

	const user = db.prepare("INSERT INTO users(uuid, name, password, role) VALUES (?, ?, ?, ?) RETURNING *")
		.get(crypto.randomUUID(), username, hashedPassword, role) as { uuid: string, name: string, role: string };
	
	return {
		role: user.role as UserRole,
		username: user.name,
		uuid: user.uuid
	};
};

const getUserForLogin = async (username: string, password: string): Promise<User | null> => {
	const hashedPassword = await hashPassword(password);
	console.log(username, hashedPassword);

	const user = db.prepare("SELECT * FROM users WHERE name = ?")
		.get(username) as { uuid: string, name: string, password: string, role: string };

	// check if password is right
	if (user == null || !await bcrypt.compare(password, user.password)) {
		return null;
	}

	return {
		role: user.role as UserRole,
		username: user.name,
		uuid: user.uuid
	};
};

export { createUser, getUserForLogin };
export type { User };