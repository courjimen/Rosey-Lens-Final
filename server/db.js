import pg from 'pg'

//connect to database with credentials
const pool = new pg.Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: 'users',
    port: 5432
})