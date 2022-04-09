import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.scss']
})
export class DraftListComponent implements OnInit {
  data:any[]=[];
  drafts:any[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/product').subscribe(res=>{
      this.data=res as Array<any>;
      this.drafts=this.data.filter(val=>val.posted);
    });
  }

}
