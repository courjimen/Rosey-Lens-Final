-- Table of Users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    firstname TEXT NOT NULL, 
    lastname TEXT,
    email VARCHAR(125) UNIQUE NOT NULL);
    
--Table Quiz_Scores
CREATE TABLE quiz_scores (
    id SERIAL PRIMARY KEY, 
    user_id INT NOT NULL REFERENCES users(user_id), 
    score INT NOT NULL, 
    date_completed TIMESTAMP WITH TIME ZONE DEFAULT NOW());

--Table of Favorites
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    favorite_type VARCHAR(50) NOT NULL,
    item_id INT NOT NULL,
    UNIQUE (user_id, favorite_type, item_id));