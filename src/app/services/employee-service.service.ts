import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpService:HttpServiceService) { }

  login(data:any){
    const {name, role}=data;
    console.log(role);
    
   return  this.httpService.getApi(`/employee?name=${name}&role=${role}`)

  }
  register(data:any){
    return  this.httpService.postApi(`/employee`, data)
  }

  getData(){
    return this.httpService.getApi('/employee')

  }
}
