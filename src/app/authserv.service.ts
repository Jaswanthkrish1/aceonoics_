import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { DataItem } from './pages/users/users.component';

export interface authserv{
  email:string,
  id:string,
  token:string,
}

export interface user{
  id:number,
  email:string,
  name:string,
  
  createdAt:string,
  updatedAt:string
  
  }

export interface Tododate{
  id:number,

}
@Injectable({
  providedIn: 'root'
})
export class AuthservService {
  //userApi
  private url = 'http://localhost:3000/login1/Adlogin';
  private url2='http://localhost:3000/users';
  private url3='http://localhost:3000/users/';
  //todoApi
  private turl='http://localhost:3000/todos'
  constructor(private http:HttpClient) { }
// todo service
TodosGet():Observable<any>{
  const responce=this.http.get<any>(this.turl);
  responce.subscribe(f=>{console.log(f)})
return responce;
}





  //User Services
login(email:string,password:string):Observable<any>{
  const payload={
    email:email,
    password:password
  }
   const responce=this.http.post(this.url,payload);
   return responce;
}

usersGet():Observable<DataItem[]>{
  const responce=this.http.get<DataItem[]>(this.url2);
  
return responce;
}
getuserbyid(id:number):Observable<user>{
const user=this.http.get<user>(this.url2+"/"+id);
user.subscribe(f=>console.log(f))
return user
}

deleteuser(userid:string):Observable<any>{
  let tonum = parseInt(userid);
  return   this.http.delete(this.url3+tonum)
   // return this.usersGet();
}

createuser(newuser:any):Observable<any>{
const {email,userName}=newuser;
 const payload={
  email:email,
  name:userName
}
return this.http.post(this.url3,payload);

}

updateUser(id:number,Updateuser:any):Observable<any>{
  const {email,userName}=Updateuser;
  const payload={
   email:email,
   name:userName
 }
 return this.http.put(this.url3+id,payload);
}
}
