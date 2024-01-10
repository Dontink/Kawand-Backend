async function routes(fastify, options) {
    fastify.get('/decode', async (request, reply) => {
      const token = request.query.token;
      try {
        const decoded = fastify.jwt.verify(token);
        return { email: decoded.email };
      } catch (error) {
        return reply.code(401).send({ message: 'Invalid token' });
      }
    });
  }
  
  module.exports = routes;
  