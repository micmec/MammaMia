const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
};

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}


module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: '35.195.117.60',
        database: 'postgres',
        user:     'postgres',
        password: 'Qawwaqqaw97'
    },
    pool: {
        min: 0
    },
    migrations: {
        tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: config,
    pool: {
        min: 0
    },
    migrations: {
        tableName: 'knex_migrations'
    }
  }

};
