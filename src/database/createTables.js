async function createTables(client) {
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

    await client.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        name VARCHAR NOT NULL
      );
    `);
    console.log("ℹ️ Tabela 'categories' verificada (já existe ou foi criada).");

    await client.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        name VARCHAR NOT NULL,
        email VARCHAR UNIQUE,
        phone VARCHAR,
        category_id UUID,
        FOREIGN KEY(category_id) REFERENCES categories(id)
      );
    `);
    console.log("ℹ️ Tabela 'contacts' verificada (já existe ou foi criada).");
    console.log("✅ Verificação de tabelas concluída.");
  } catch (err) {
    console.error("❌ Erro ao criar tabelas/verificar tabelas:", err);
  }
}

module.exports = createTables;
