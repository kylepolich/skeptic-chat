const default_config = {
  settings: {},
  handlers: {
    connection: socket => {
      console.info('Skeptic-Chat[Server]', `Client connected with ID::${socket.id}.`);
      try {
        for (var channel in config.channels) socket.on(channel, config.channels[channel].bind(socket));
      } catch(error) {
        console.warn('Skeptic-Chat[Server]', error.message, error.stack);
      }
    },
    disconnect: reason => {
      console.info('Skeptic-Chat[Server]', `Client disconnected due to ${reason}.`);
    },
    disconnecting: reason => {
      console.info('Skeptic-Chat[Server]', `Client is disconnecting due to ${reason}.`);
    },
    error: error => {
      console.error('Skeptic-Chat[Server]', error, error.stack);
    },
  },
  channels: {}
};

export default (server, config = {}) => {
  if (!server) throw new TypeError(`Skeptic-Chat[Server]: No server was supplied to listen to.`);
  // Merge config with defaults
  config = Object.assign({}, default_config, config);
  // Setup Socket and listen on our server
  let io = require('socket.io').listen(server, config.settings);
  // Bind Socket event handlers
  for (var handler_name in config.handlers) io.on(handler_name, config.handlers[handler_name]);
  // Return our built server object
  return io;
};