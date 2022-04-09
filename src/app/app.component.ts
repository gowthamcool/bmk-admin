import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bmk-admin';
  data: any[]=[];
  enquiries:any[]=[];
  feedbacks:any[]=[];
  drafts:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/product').subscribe(res=>{
      this.data=res as Array<any>;
      this.drafts=this.data.filter(val=>val.posted);
    });
    this.http.get('http://localhost:5000/api/enquiry').subscribe(res=>{
      this.enquiries=res as Array<any>;
    });
    this.http.get('http://localhost:5000/api/feedback').subscribe(res=>{
      this.feedbacks=res as Array<any>;
    });
  }
}
