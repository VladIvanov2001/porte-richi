'use strict';

module.exports = function(Shoppricetags) {

  Shoppricetags.getAddressAndTags = async function(data) {
    const newPageInfo = await Shoppricetags.create({
      shopId: data.shopId,
    });
    await newPageInfo.hallDoor.create();
    await newPageInfo.rightShop.create();
    return Shoppricetags.findById(newPageInfo.shopId, {include: ['hallDoor', 'rightShop']});
  };

  Shoppricetags.remoteMethod('getAddressAndTags', {
    accepts: [
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'},
      },
    ],
    returns: {type: 'object', root: true},
    http: {verb: 'post'},
  });

};
