import pg from 'pg'

//connect to database with credentials
const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.DATABASE,
    port: process.env.PRT || 5432,
    ssl: {
        rejectUnauthorized: false
    }
})

export default pool