const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABAUSE_URL || 'postgres://localhost/podvertise_db', {
  logging: false
})

const User = conn.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  googleId: Sequelize.STRING,
  githubId: Sequelize.STRING,
  facebookId: Sequelize.STRING
})

const sync = () => {
  return conn.sync({ force: true })
}

module.exports = {
  sync,
  models: {
    User
  }
}
