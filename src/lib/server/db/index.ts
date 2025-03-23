import sqlite3 from 'better-sqlite3';

const db = sqlite3("database.db");

const prepareDb = async () => {
	db.exec(`CREATE TABLE IF NOT EXISTS users (
		uuid TEXT NOT NULL,
		name TEXT NOT NULL,
		password BLOB(32) NOT NULL,
		role TEXT NOT NULL,

		PRIMARY KEY (uuid)
	)`);

	db.exec(`CREATE TABLE IF NOT EXISTS sessions (
		sessionId TEXT NOT NULL,
		userId TEXT NOT NULL,
		creation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

		PRIMARY KEY (sessionId),
		FOREIGN KEY (userId) REFERENCES users(uuid)
	)`);

	db.exec(`CREATE TABLE IF NOT EXISTS answers (
		questionId INTEGER NOT NULL,
		userId TEXT NOT NULL,
		isCorrect BOOLEAN NOT NULL,

		PRIMARY KEY (questionId, userId)
	)`);

	db.exec(`CREATE TABLE IF NOT EXISTS answer_choices (
		id INTEGER,
		questionId INTEGER NOT NULL,
		userId TEXT NOT NULL,
		answerId INTEGER NOT NULL,

		PRIMARY KEY (id)
	)`);

	// create indexes
	db.exec("CREATE INDEX IF NOT EXISTS answer_choices_userId_questionId_idx ON answer_choices (userId, questionId)");
};

// scuffed: this oprobably belogns into some sort of hook
prepareDb().catch(err => {
	console.error(err);
});

export default db;