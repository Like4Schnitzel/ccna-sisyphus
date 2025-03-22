import sqlite3 from 'better-sqlite3';

const db = sqlite3("database.db");

const prepareDb = async () => {	// todo(f): think about this db structure a bit more
	db.exec(`CREATE TABLE IF NOT EXISTS users (
		uuid TEXT,
		name TEXT,
		password BLOB(32),
		role TEXT,

		PRIMARY KEY (uuid)
	)`); // sorry dass role integer ist

	db.exec(`CREATE TABLE IF NOT EXISTS sessions (
		sessionId TEXT,
		userId TEXT,

		PRIMARY KEY (sessionId),
		FOREIGN KEY (userId) REFERENCES users(uuid)
	)`); // TODO(f): add expiry

	db.exec(`CREATE TABLE IF NOT EXISTS answers (
		questionId INTEGER,
		userId TEXT,
		isCorrect BOOLEAN,

		PRIMARY KEY (questionId, userId)
	)`);

	db.exec(`CREATE TABLE IF NOT EXISTS answer_to_answers (
		id INTEGER AUTO INCREMENT,
		questionId INTEGER,
		userId TEXT,
		answerId INTEGER,

		PRIMARY KEY (id)
	)`);
};

// scuffed: this oprobably belogns into some sort of hook
prepareDb().catch(err => {
	console.error(err);
});

export default db;