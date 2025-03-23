import sqlite3 from 'better-sqlite3';

const db = sqlite3("database.db");

const prepareDb = async () => {	// todo(f): think about this db structure a bit more
	db.exec(`CREATE TABLE IF NOT EXISTS users (
		uuid TEXT NOT NULL,
		name TEXT NOT NULL,
		password BLOB(32) NOT NULL,
		role TEXT NOT NULL,

		PRIMARY KEY (uuid)
	)`); // sorry dass role integer ist

	db.exec(`CREATE TABLE IF NOT EXISTS sessions (
		sessionId TEXT NOT NULL,
		userId TEXT NOT NULL,

		PRIMARY KEY (sessionId),
		FOREIGN KEY (userId) REFERENCES users(uuid)
	)`); // TODO(f): add expiry

	db.exec(`CREATE TABLE IF NOT EXISTS answers (
		questionId INTEGER NOT NULL,
		userId TEXT NOT NULL,
		isCorrect BOOLEAN NOT NULL,

		PRIMARY KEY (questionId, userId)
	)`);

	// todo(f): if I had an index on answer_to_answers
	// with (userId, answerId) I wouldn't really need answers
	// anymore? so that would leave me with a table less
	// could be a good idea to adapt in the future - when I'm
	// done overcomplicating things
	db.exec(`CREATE TABLE IF NOT EXISTS answer_to_answers (
		id INTEGER AUTO INCREMENT NOT NULL,
		questionId INTEGER NOT NULL,
		userId TEXT NOT NULL,
		answerId INTEGER NOT NULL,

		PRIMARY KEY (id)
	)`);

	// create indexes
	db.exec("CREATE INDEX IF NOT EXISTS answer_to_answers_userId_idx ON answer_to_answers (userId, questionId)");
};

// scuffed: this oprobably belogns into some sort of hook
prepareDb().catch(err => {
	console.error(err);
});

export default db;