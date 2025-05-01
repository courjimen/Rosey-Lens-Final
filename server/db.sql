-- Table of Users
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY, 
    firstname TEXT NOT NULL, 
    lastname TEXT,
    email VARCHAR(125) UNIQUE NOT NULL);

--Table Quiz_Scores
CREATE TABLE IF NOT EXISTS quiz_scores (
    id SERIAL PRIMARY KEY, 
    user_id INT NOT NULL REFERENCES users(user_id), 
    score INT NOT NULL, 
    date_completed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    mood_category TEXT NOT NULL,
    message TEXT NOT NULL);

--Table of Favorites
CREATE TABLE IF NOT EXISTS favorites (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    favorite_type VARCHAR(50) NOT NULL,
    item_id INT NOT NULL,
    UNIQUE (user_id, favorite_type, item_id));

--Table of Guests
CREATE TABLE guest (
    user_id SERIAL PRIMARY KEY, 
    firstname TEXT NOT NULL);