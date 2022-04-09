import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiries-list',
  templateUrl: './enquiries-list.component.html',
  styleUrls: ['./enquiries-list.component.scss']
})
export class EnquiriesListComponent implements OnInit {
  enquiries:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/enquiry').subscribe(res=>{
      this.enquiries=res as Array<any>;
    });
  }

}
