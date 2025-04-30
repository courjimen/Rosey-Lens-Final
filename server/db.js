import pg from 'pg'

//connect to database with credentials
const pool = new pg.Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: 'rosy',
    port: 5432
})

export default pool





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


//     ssl: {
//         rejectUnauthorized: false
//     }
// })