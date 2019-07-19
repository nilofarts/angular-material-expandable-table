import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import { Schedule } from './model/schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionChargingService {

  constructor(private http:HttpClient) { }
  url = 'http://192.168.10.160:8080';

  getAllProductCharging(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.url}/productionCharging`);
 }

 getProductChargingById(id:Number){
  return this.http.get<Schedule>(`${this.url}/productionCharging/`+id);
 }
}

