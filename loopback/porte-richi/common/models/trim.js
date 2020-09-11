'use strict';

module.exports = function(Trim) {
  Trim.orderDoor = async function(data) {
    console.log(data.id);
    return await Trim.find({where:{doorId: data.id}}, {include: {relation: 'hallDoor'}});
  };

  Trim.remoteMethod('orderDoor', {
    accepts: [
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'}
      }
    ],
    returns: {type: 'Trim', root: true},
    http: {verb: 'post'},
  })

};
