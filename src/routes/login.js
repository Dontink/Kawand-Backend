const bcrypt = require('bcrypt');
const users = require('../usersData');

async function routes(fastify, options) {
  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body;
    const user = users[email];

    if (!user || !(await bcrypt.compare(password, user))) {
      return reply.code(401).send({ message: 'Invalid email or password' });
    }

    const token = fastify.jwt.sign({ email });
    return { token };
  });
}

module.exports = routes;
