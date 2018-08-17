module.exports = {
    port: process.env.PORT || 8082,
    db: {
      database: process.env.DB_NAME || 'career',
      user: process.env.DB_USER || 'career',
      password: process.env.DB_PASS || 'career',
      options: {
        operatorsAliases: false,
        host: process.env.HOST || 'localhost'
      }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
  