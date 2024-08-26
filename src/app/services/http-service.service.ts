import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


   base="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }


  postApi( endPoint:string,  data:any){
   return this.httpClient.post(this.base+endPoint, data)
  }


  
  getApi( endPoint:any ){
    return this.httpClient.get(this.base+endPoint)
   }
 
  

}
