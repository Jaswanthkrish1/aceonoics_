import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Attribute, Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

export interface authserv{
  
  token:string,
  user: {
    id: number,
    email: string,
    
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private http:HttpClient){}
  validateForm!: UntypedFormGroup;
  isLoggedIn: boolean = true;
  email!:any;
  password!:any;
  empty!:any;  
  returnt!:boolean;
  login(email1:string,password1:string) {
    const requestBody = { email:email1, password: password1 };
    const url = 'http://localhost:3000/login1/Adlogin';
 const res= this.http.post(url, requestBody).subscribe((response: any) => {
  const responseObject = response as authserv; 
   console.log(responseObject);
   localStorage.setItem('token',responseObject.token);
   localStorage.setItem('id',responseObject.user.id.toString());
if(localStorage.getItem('token')!=null&& localStorage.getItem('id')!=null){
  this.isLoggedIn = true;
  alert("login Done ")
}
},(error:any)=>{
  if(error.status === 401){
    alert('UnAuthorized :Invalid Credentials')
  }else{alert('error accoured')}
});

if(!res){
  
    alert("User Credentials Invalid")
  
}
    //  
    
    // Perform login operation here
    // If login is successful, set isLoggedIn to true
   

  }
}
