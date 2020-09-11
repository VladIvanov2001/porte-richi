'use strict';


module.exports = function(Shop) {
  Shop.login = async function(data) {

    const err = new Error('Wrong password');
    err.status = 403;
      const users = await Shop.find({where: {username: data.username}, raw: true});
      if(!users){
        err.status = 404;
        throw err;
      }
      else {
        if (users[0].password === data.password) {
          return data
        } else throw err;
      }
  };

  Shop.remoteMethod('login', {
    accepts: [
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'}
      }
    ],
    returns: {type: 'User', root: true},
    http: {verb: 'post'},
  })
};
