import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthservService } from 'src/app/authserv.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
export interface DataItem {
  name: string;
  id: number;
  email: string;
 
}
// Name (Text Box)
// 2. Description (TextArea Box)
// 3. Complete Before (datetime)
// 4. Assigned to User (User Table Record)
// 5. Assigned By User (User Table Record)
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  //importent dont change
  listOfData: any;
  private data!: DataItem[];
//end
  inputValue:any;
  inputid!:string;
  inputemail:any;
  inputname:any;
  constructor(private _http:HttpClient, private _user:AuthservService, private _router:Router,
    private NzMessageService:NzMessageService){}
  ngOnInit(): void {
    this.users();
    this._user.TodosGet();
    
  }
  
  users(){
    this._user.usersGet().subscribe((users:DataItem[])=>{
      
      this.listOfData=users;
      this.data=this.listOfData
    })
  }

  deleteuser(userid:string){
    
   this._user.deleteuser(userid).subscribe(f=>{
    console.log(f);
    this.users();
    this.NzMessageService.info('User Deleted');
   });
   
  }
  cancel(): void {
    this.NzMessageService.info(' Delete Action Cancel');
  }

  findbyid(id:string){
  
    if (id && id.trim().length > 0) {

      const filtered = this.listOfData.filter((d: DataItem) => {
        return d.id.toString().toLowerCase().includes(id.trim());
        
      });
      if(!filtered){
        this.listOfData=this.data
       }else{ this.listOfData = filtered;}
      
    }else{this.listOfData=this.data}

  }
  findbyemail(email:string){
  
    if (email && email.trim().length > 0) {

      const filtered = this.listOfData.filter((d: DataItem) => {
        return d.email.toString().toLowerCase().includes(email.trim());
        
      }); 
     if(!filtered){
      this.listOfData=this.data
     }else{ this.listOfData = filtered;}
     
      
    }else{this.listOfData=this.data}
  }

  findbyname(name:string){
  
    if (name && name.trim().length > 0) {

      const filtered = this.listOfData.filter((d: DataItem) => {
        return d.name.toString().toLowerCase().includes(name.trim());
        
      }); 
     if(!filtered){
      this.listOfData=this.data
     }else{ this.listOfData = filtered;}
     
      
    }else{this.listOfData=this.data}
  }

  update(id:string){
    this._router.navigate(['update-user/'+id]);
  }
  
  ViewUser(id:string){
    this._router.navigate(['userView/'+id])
  }

  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 2
    },
    {
      title: 'Email',
      compare: (a: DataItem, b: DataItem) => a.email.localeCompare(b.email),
      priority: false
    },
    {
      title: 'Name',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Actions',
    
    }
  ];
  
  
}

