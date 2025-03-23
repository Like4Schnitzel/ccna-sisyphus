import db from ".";
import crypto from 'node:crypto';
import type { User } from "./users";

const SESSION_COOKIE_NAME = "session";
const SESSION_EXPIRY = 30 * 24 * 60 * 60 * 1000;

const generateSessionId = () => {
	return crypto.randomBytes(64).toString("hex");
}

/**
 * Creates a session for a specific user
 * @param userId the user the session belongs to
 * @returns the session "id"
 */
const createSession = async (userId: string): Promise<string> => {
	const sessionId = generateSessionId();

	db.prepare("INSERT INTO sessions(sessionId, userId) VALUES (?, ?)").run(sessionId, userId);

	return sessionId;
}

/**
 * Gets the user belonging to a session id
 * @param sessionId the session id that should be looked up
 * @returns the user the session belongs to
 */
const getUserForSession = async (sessionId: string): Promise<User | null> => {
	const user = db.prepare("SELECT u.*, s.creation FROM sessions s INNER JOIN users u ON u.uuid = s.userId WHERE s.sessionId = ?")
		.get(sessionId) as { uuid: string, name: string, role: string, creation: string };
	
	if (!user) return null;
	
	// check if session expired
	if (Date.now() > new Date(user.creation).getTime() + SESSION_EXPIRY) {
		// remove the session from the database
		// there should also probably be a cleanup job that does this
		db.prepare("DELETE FROM sessions WHERE sessionId = ?").run(sessionId);

		return null;
	}

	return {
		uuid: user.uuid,
		role: user.role,
		username: user.name
	} as User;
}

/**
 * Deletes a session by session id
 * @param sessionId session id to be deleted
 * @returns if a session was deleted or not
 */
const deleteSession = async (sessionId: string): Promise<boolean> => {
	const result = db.prepare("DELETE FROM sessions WHERE sessionId = ?")
		.run(sessionId);
	
	return result.changes != 0;
}

export { createSession, getUserForSession, deleteSession, SESSION_COOKIE_NAME, SESSION_EXPIRY };