import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();
const { Pool } = pkg;

const Database = new Pool ({
    connectionString: process.env.DATABASE_URI
})

Database.connect()
    .then(() => console.log("connected to the database"))
    .catch(err => console.error("connection error", err));

export default Database;