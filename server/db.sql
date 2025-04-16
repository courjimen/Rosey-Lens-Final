-- Table of Users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    username TEXT UNIQUE NOT NULL, 
    email VARCHAR(125), 
    phone VARCHAR(25), 
    password TEXT NOT NULL);

--Table Quiz_Scores
CREATE TABLE quiz (
    id SERIAL PRIMARY KEY, 
    user_id INT NOT NULL REFERENCES 
    users(user_id), 
    score INT NOT NULL, 
    date_completed TIMESTAMP WITH TIME ZONE DEFAULT NOW());

--Table of Favorites