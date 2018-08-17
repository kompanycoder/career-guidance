const path = require('path')

module.exports = {
    port: process.env.PORT || 8082,
    db: {
      database: process.env.DB_NAME || 'career',
      user: process.env.DB_USER || 'career',
      password: process.env.DB_PASS || 'career',
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, 'path/to/career.sqlite')
      }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
  