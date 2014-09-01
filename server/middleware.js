Fiber = Npm.require('fibers');

WebApp.connectHandlers.stack.splice (0, 0, {
  route: '/api',
  handle: function(req, res, next) {
    var name = req.url.split('/')[1];    // Get the parameter
    new Fiber(function () {              // Packing in Fiber is unnecessary,
                                         // unless you want to connect to Mongo
      res.writeHead(200, {'Content-Type': 'text/plain',});
      res.write('Example output. Query: [' + name + ']');
      res.end();
    }).run()
  },
});
