CREATE TABLE IF NOT EXISTS todo (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    is_done BOOLEAN DEFAULT FALS
);