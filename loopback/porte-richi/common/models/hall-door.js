'use strict';

module.exports = function (Halldoor) {

  Halldoor.orderHallDoor = async function(data) {
    return await Halldoor.find({
      where: {type: data.type, id: data.id},
      include: ['trims', 'constructions', 'furniture'],
    });
  };

  Halldoor.getOrderById = async function (orderId) {
    console.log(orderId);
    const order = await Halldoor.findById(orderId, {
      include: ['constructions', 'trims', 'furniture'],
    });
    return order;
  };

  Halldoor.postInfoFromForm = async function (data) {
    const newDoor = await Halldoor.create({
      name: data.name,
      type: data.type,
      equipment: data.equipment,
      price: data.price,
      priceWithDiscount: data.priceWithDiscount,
    });
    await newDoor.constructions.create(data.constructions);
    await newDoor.trims.create(data.trims);
    await newDoor.furniture.create(data.furniture);
    return Halldoor.findById(newDoor.id, {include: ['trims', 'constructions', 'furniture']});
  };

  Halldoor.remoteMethod('orderHallDoor', {
    accepts: [
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'}
      }
    ],
    returns: {type: 'object', root: true},
    http: {verb: 'post'},
  });

  Halldoor.remoteMethod('getOrderById', {
    accepts: [
      {
        arg: 'orderId',
        type: 'number',
        required: true,
        http: {source: 'path'},
      },
    ],
    returns: {type: 'object', root: true},
    http: {verb: 'get', path: '/getOrderById/:orderId'},
  });

  Halldoor.remoteMethod('postInfoFromForm', {
    accepts: [
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'}
      }
    ],
    returns: {type: 'object', root: true},
    http: {verb: 'post'},
  });
};
