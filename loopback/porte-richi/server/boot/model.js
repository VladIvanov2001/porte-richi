module.exports = function(app) {
  if (process.argv[2] !== 'migrate-postgres') {
    return;
  }
  app.dataSources.postgres.autoupdate('rightShop', function(err) {
    if (err) throw err;

    app.models.rightShop.create([{
      username: 'dzer',
      address: 'пр-т Дзержинского, 122',
      password: '1111112345',
      email: 'affdssds@gmail.com',
    }, {
      username: 'olesh',
      address: 'ул. Олешего 10',
      password: '1234567',
      email: 'afsds@gmail.com',
    }, {
      username: 'trum',
      address: 'ул. Кальварийская, 7Б',
      password: '12345678',
      email: 'ads@gmail.com',
    }], function(err, rightShop) {
      if (err) throw err;
      console.log('Models created: \n', rightShop);
    });
  });

  app.dataSources.postgres.autoupdate('trim', function(err) {
    if (err) throw err;

    app.models.trim.create([{
      inside: 'MDF-панель 16 мм, SteelTex цвета «Дуб золотистый» с чёрной патиной, фрез. Л-8',
      outside: 'MDF-панель 16 мм, SteelTex цвета «Белый» с кофейной патиной, фрез. Л-2',
      boxColoring: 'снаружи муар «Чёрный», внутри муар «Белый»',
    }, {
      inside: 'MDF-панель 18 мм, SteelTex цвета «Береза золотистый» с чёрной патиной, фрез. Л-8',
      outside: 'MDF-панель 18 мм, SteelTex цвета «Желтый» с чайной патиной, фрез. Л-2',
      boxColoring: 'снаружи муар «Фиолетовый», внутри муар «Зеленый»',
    }]);
  });

  app.dataSources.postgres.autoupdate('furniture', function(err) {
    if (err) throw err;

    app.models.furniture.create([{
      upperLock: 'Kale 257L, цилиндр Securemme',
      downLock: 'Kale 252R цилиндровый',
      patch: 'Crit с автомат. шторкой',
      armorPatch: 'Crit',
      handle: 'Apecs в цвете хром',
    }, {
      upperLock: 'Kale 259L, цилиндр Securemme',
      downLock: 'Kale 212Q цилиндровый',
      patch: 'Crit с механ. шторкой',
      armorPatch: 'Rodos',
      handle: 'Apex в цвете луны',
    }], function(err, furniture) {
      if (err) throw err;
      console.log('Models created: \n', furniture);
    });
  });

  app.dataSources.postgres.autoupdate('construction', function(err) {
    if (err) throw err;

    app.models.construction.create([{
      bladeThickness: 98,
      sheetMetalThickness: 12,
      boxMetalThickness: 12,
      sealingContours: 4,
      clothInsulation: 'пенополистирол, порилекс',
      boxInsulation: 'мин.вата Knauf',
      sealant: 'Schiegel и Сyclone',
    }, {
      bladeThickness: 111,
      sheetMetalThickness: 15,
      boxMetalThickness: 11,
      sealingContours: 2,
      clothInsulation: 'пенополистирол, порилекс',
      boxInsulation: 'мин.вата Knauf',
      sealant: 'Schiegedasl и Сyclofsdafne',
    }], function(err, construction) {
      if (err) throw err;
      console.log('Models created: \n', construction);
    });
  });

  app.dataSources.postgres.autoupdate('hallDoor', async function(err) {
    const trims = await app.models.Trim.find();
    const constructionsOrd = await app.models.construction.find();
    const furnitureOrd = await app.models.furniture.find();
    const doors = await app.models.hallDoor.create([{
      name: 'Just Door',
      type: 'living',
      equipment: 'max',
      price: 1500,
    }, {
      name: 'Strange Door',
      type: 'hall',
      equipment: 'basic',
      price: 1300,
      priceWithDiscount: 1100,
    }]);

    doors.forEach((door, index) => {
      const {outside, inside, boxColoring} = trims[index];
      door.trims.create({
        outside,
        inside,
        boxColoring,
      });
    });

    doors.forEach((door, index) => {
      const {upperLock, downLock, patch, armorPatch, handle} = furnitureOrd[index];
      door.furniture.create({
        upperLock,
        downLock,
        patch,
        armorPatch,
        handle,
      });
    });

    doors.forEach((door, index) => {
      const {bladeThickness, sheetMetalThickness, boxMetalThickness, sealingContours, clothInsulation, boxInsulation, sealant} = constructionsOrd[index];
      door.constructions.create({
        bladeThickness,
        sheetMetalThickness,
        boxMetalThickness,
        sealingContours,
        clothInsulation,
        boxInsulation,
        sealant,
      });
    });
  });

  app.dataSources.postgres.autoupdate('sizeOfDoor', function(err) {
    app.models.sizeOfDoor.create([{
      height: 2000,
      width: 800,
    }, {
      height: 3000,
      width: 860,
    }], function(err, construction) {
      if (err) throw err;
      console.log('Models created: \n', construction);
    });
  });

  app.dataSources.postgres.autoupdate('ShopPriceTags', function(err) {
    app.models.ShopPriceTags.create([{
      rightShopId: 1,
      hallDoorId: 1,
    }, {
      rightShopId: 1,
      hallDoorId: 2,
    }, {
      rightShopId: 2,
      hallDoorId: 1,
    }, {
      rightShopId: 3,
      hallDoorId: 2,
    },
    ]);
  });
};
