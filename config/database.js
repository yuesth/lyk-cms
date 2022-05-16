module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'lyk_cms'),
      user: env('DATABASE_USERNAME', 'yuesth'),
      password: env('DATABASE_PASSWORD', 'AlticNeula963'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
