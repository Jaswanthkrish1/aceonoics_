import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit{
  constructor(private router:Router,private _route:ActivatedRoute){}
  url!:string;
  ngOnInit(): void {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        const snapshort=this._route.snapshot;
        console.log(snapshort)
        this.url=e.url;
        console.log(e.url)
      }
    })
  }
  isCollapsed = false;

   

}
