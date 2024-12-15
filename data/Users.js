const bcrypt = require('bcryptjs')
const users = [
     {
          name: "Dong",
          email: "dong@gmail.com",
          password: bcrypt.hashSync("123456",10),
          isAdmin: true,
     },
     {
          name: "User",
          email: "user1@gmail.com",
          password: bcrypt.hashSync("123456",10),
     }
]

module.exports = users;