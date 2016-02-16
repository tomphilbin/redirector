'use strict';

class Routes {
  constructor(routeHandlers) {
    this.routeHandlers = routeHandlers;
  }

  setup(app) {
    app.get('/github', this.routeHandlers.github);
    app.get('/stackoverflow', this.routeHandlers.stackoverflow);
  }
}

module.exports = Routes;
