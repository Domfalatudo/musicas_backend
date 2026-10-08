import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import "dotenv/config"

const app = express();

app.use(cors());
app.use(express.json());

const sql = mysql2.createPool({
    host: process.env.HOST_BANCO,
    user: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: process.env.NOME_BANCO
})

app.get("/", (request, response) => {
    const comandoSelect = "SELECT * FROM musicas_dominic"

    sql.query(comandoSelect, (error, data) => { 
        if (error) {
                console.log(error);
                return;
            }        
        response.json(data)    
    })
})

app.listen(3000, () => {
  console.log("Servidor online");
});

export default app;