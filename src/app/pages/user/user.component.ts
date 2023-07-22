import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthservService, user } from 'src/app/authserv.service';

export interface userview{
  id:number,
  email:string,
  name:string,
  createdat:string,
  updatedat:string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit{
  data="data"
  id!:number;
  email!:string;
  name!:string;
  createdat!:string;
  updatedat!:string;
   
  constructor (private _activeRoute:ActivatedRoute,private _user:AuthservService,private _route:Router){
}
  
  ngOnInit(): void {
   
    this._activeRoute.params.subscribe(param=>{
      const id=param['id'];
      this.id=parseInt(id);
     this._user.getuserbyid(this.id).subscribe((f:user)=>{
        this.email=f.email;
        this.name=f.name;
        this.createdat=f.createdAt;
        this.updatedat=f.updatedAt

       });
    })

    
    
  }


  Createuserpage(): void {
    this.id;
    if(this.id){
    this._route.navigate(['create-user']);}
  }
  Updatepage():void{
    if(this.id){
      this._route.navigate(['update-user/'+this.id])
    }
  }


}
