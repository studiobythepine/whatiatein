module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABSE_PORT", 5432),
    },
    useNullAsDefault: true,
  },
});
