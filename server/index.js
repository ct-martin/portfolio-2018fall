
const express = require('express');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const port = process.env.PORT || 3000;

// Connect to Redis, if available
if(process.env.REDIS_URL) {
  io.adapter(redisAdapter(process.env.REDIS_URL));
}

app.set('port', port);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port);
  console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
}
start();
