/* tslint:disable */

declare var Object: any;
export interface ShopInterface {
  "username": string;
  "adress": string;
  "password": string;
  "id"?: number;
}

export class Shop implements ShopInterface {
  "username": string;
  "adress": string;
  "password": string;
  "id": number;
  constructor(data?: ShopInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Shop`.
   */
  public static getModelName() {
    return "Shop";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Shop for dynamic purposes.
  **/
  public static factory(data: ShopInterface): Shop{
    return new Shop(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Shop',
      plural: 'Shops',
      path: 'Shops',
      idName: 'id',
      properties: {
        "username": {
          name: 'username',
          type: 'string'
        },
        "adress": {
          name: 'adress',
          type: 'string',
          default: 'passw'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
