import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
//Local
  // serverUrl = 'http://localhost/mytechnician/api/';
  // resell_image='http://localhost/mytechnician/public/assets/images/resell_product'; 
  
// online
 serverUrl = 'https://mytechnicians.in/admin/api/';
resell_image='https://mytechnicians.in/admin/public/assets/images/resell_product'; 

constructor() { }
}
