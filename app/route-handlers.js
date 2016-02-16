'use strict';

class RouteHandlers {
  github(req, res) {
    res.redirect('https://github.com/tomphilbin');
  }

  stackoverflow(req, res) {
    res.redirect('http://stackoverflow.com/users/1584074/tom-p');
  }
}

module.exports = RouteHandlers;
