'use strict';

module.exports = function (app) {
  app.post('/login', function(req, res) {
    rightShop.login({
      username: req.body.username,
      password: req.body.password,
    }, 'user', function(err, token) {
      if (err) {
        console.log(token);
      }
    });
  });
};
