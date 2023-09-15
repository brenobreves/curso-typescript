import pg from "pg";
import dotenv from "dotenv"

dotenv.config()

const {Pool} = pg;

const db = new Pool({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:process.env.PG_PASSWORD,
    database:"CursoTS"
});

export {db};