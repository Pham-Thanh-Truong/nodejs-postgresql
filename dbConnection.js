require("dotenv").config();
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect(undefined)
    .then(() => {
        console.log("Connect success");
    })
    .catch((error) => {
        console.error("Connect fail", error);
    })

module.exports = pool;
