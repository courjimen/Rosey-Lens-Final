import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

var url = process.env.DATABASE;

const pool = new Pool({
    port: 5432,
    connectionString: url,
    ssl: {
        rejectUnauthorized: false,
    },
})
console.log("Connection to database successful!")


export default pool;
// import pg from 'pg'
// import 'dotenv/config'

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

//connect to database with credentials
// const pool = new pg.Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: 5432,
//     ssl: {
//         rejectUnauthorized: false
//     }
// })