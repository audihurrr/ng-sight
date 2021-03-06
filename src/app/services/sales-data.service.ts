import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ORDERS} from '../mockdata/mock-orders';
import { Order } from '../shared/order';
import { MessageService} from './message.service';
//import 'rxjs/add/operator/map';
// import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  private _orderUrl = 'api/order/';

  constructor(
    private _http: HttpClient,
    private _messageService: MessageService) { 

    }
  
  private log(message: string) {
    this._messageService.add(`SalesDataService: ${message}`);
  }

  getOrders(pageIndex: number, pageSize: number): Observable<Order[]> {
    this.log('sales-data-service.getOrders()');
    return this._http.get<Order[]>('http://localhost:5000/' + this._orderUrl + pageIndex + '/' + pageSize);
    //var msg = 'fetched orders';
    var request = 'http://localhost:5000/' + this._orderUrl;
    
    console.log(request);
    this.log(request);
    return this._http.get<Order[]>('http://localhost:5000/api/order/');
    //return of(ORDERS);
  }



}
