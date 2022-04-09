import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {
  feedbacks:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/feedback').subscribe(res=>{
      this.feedbacks=res as Array<any>;
    });
  }

}
