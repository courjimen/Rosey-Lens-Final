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





// var url = process.env.DATABASE;

// const pool = new Pool({
//     port: 5432,
//     connectionString: url,
//     // ssl: {
//     //     rejectUnauthorized: false,
//     // },
// })
// console.log("Connection to database successful!")


// import pg from 'pg'
//
// const { Pool } = pg
// var url = process.env.DATABASE

// const pool = new Pool ({
//     connectionString: url,
//     ssl: {
//         rejectUnauthorized: false
//     }
// })

// console.log(url)

// export default pool


//     ssl: {
//         rejectUnauthorized: false
//     }
// })