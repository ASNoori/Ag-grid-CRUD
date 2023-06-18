import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AggridserviceService {

  constructor(private http: HttpClient) { }
  Adduser(data:any){
    return this.http.post<any>("http://localhost:3000/user",data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  Getuser(){
    return this.http.get<any>("http://localhost:3000/user")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  putUser(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/user/"+id,data)

  }
  deleteUser(id:number){
    return this.http.delete<any>("http://localhost:3000/user/"+id)
  }
}
