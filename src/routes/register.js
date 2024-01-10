const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = require('../usersData');

async function routes(fastify, options) {
  fastify.post('/register', async (request, reply) => {
    const { email, password } = request.body;
    if (users[email]) {
      return reply.code(400).send({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    users[email] = hashedPassword;
    return { message: 'User registered successfully' };
  });
}

module.exports = routes;