const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-jwt'), {
  secret: 'supersecret'
});

// Register routes
fastify.register(require('./routes/register'));
fastify.register(require('./routes/login'));
fastify.register(require('./routes/decode.js'));

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
