'use strict';

module.exports = function(Rightshop) {
  Rightshop.afterRemote('login', async function(ctx) {
    console.log(ctx.result.id);
    if (ctx.result.id) {
      ctx.result.shop = await Rightshop.findById(ctx.result.userId, {
        include: ['hallDoors'],
      });
    }
  });

  Rightshop.getInfoAboutPage = async function(shopId, type) {
    console.log(type);
    const order = await Rightshop.findById(shopId, {
      include: [{
                   where: {type},
        },
      }],
    });
    console.log(order);
    return order;
  };

  Rightshop.remoteMethod('getInfoAboutPage', {
    accepts: [
      {
        arg: 'shopId',
        type: 'number',
        required: true,
        http: {source: 'path'},
      },
      {
        arg: 'type',
        type: 'string',
        required: true,
        http: {source: 'path'},
      },
    ],
    returns: {type: 'object', root: true},
    http: {verb: 'get', path: '/getInfoAboutPage/:shopId/:type'},
  });
};
