import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  userData: any = [];

  constructor(private http: HttpClient) { }

  addBusiness(first_name, business_name, business_phone_number,business_email) {
    const obj = {
      person_name: first_name,
      business_name: business_name,
      business_phone_number: business_phone_number,
      business_email: business_email,
     };
    this.userData.push(obj);
    // this.http.post(`${this.uri}/add`, obj)
    //     .subscribe(res => console.log('Done'));
  }

  showUserData(){
    console.log("all object "+ this.userData);
    return this.userData
    
  }
}
