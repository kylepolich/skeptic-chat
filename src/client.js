const default_config = {
  connect: '/',
  events: {}
};

const SkepticClient = (config = {}) => {
  // Merge config with defaults
  config = Object.assign({}, default_config, config);
  // Connect to Server Socket
  let io = require('socket.io-client')(config.connect);
  // Bind events
  for (let name in config.events) {
    const handler = config.events[name];
    if (handler.constructor.name !== 'Function') throw new TypeError(`Skeptic-Chat[Client]: Event Handler "${name}" must be a function.`);
    io.on(name, handler);
  }
  return io;
};

export default SkepticClient;