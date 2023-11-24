require("dotenv").config();
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const { Pool } = require('pg');
const psql = "postgres://default:zmkjKA1R4XZO@ep-sweet-truth-20244450.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"

const pool = new Pool({
    connectionString: psql,
})

pool.connect(undefined)
    .then(() => {
        console.log("Connect success");
    })
    .catch((error) => {
        console.error("Connect fail", error);
    })

module.exports = pool;
