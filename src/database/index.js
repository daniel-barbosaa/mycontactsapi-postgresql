require("dotenv").config();
const { Client } = require("pg");
const createTables = require("../database/createTables");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => {
    console.log("Conectado ao banco com sucesso");
    return createTables(client);
  })
  .catch((err) => {
    console.log("error ao conectar com o banco:", err);
  });

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
