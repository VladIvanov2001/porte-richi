import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Order} from './order';
import {typeofExpr} from '@angular/compiler/src/output/output_ast';

@Injectable()
export class HttpService {
  private url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {
  }

  postData(user: User) {
    const body = {username: user.username, adress: user.adress, password: user.password};
    return this.http.post(this.url + 'rightShops/login', body);
  }

  getOrderHallDoor(param: string = 'hall', token: string = '') {
    return this.http.post(this.url + 'hallDoors/orderHallDoor', {type: param, key: token});
  }

  getOrderById(id: number) {
    return this.http.get(this.url + 'hallDoors/getOrderById/' + id);
  }

  postInfoFromForm(order: Order) {
    return this.http.post(this.url + 'hallDoors/postInfoFromForm', order);
  }

  getInfoAboutShop(shopId: string, type: string = 'hall') {
    return this.http.get(this.url + 'rightShops/getInfoAboutPage/' + shopId + '/' + type);
  }
}

