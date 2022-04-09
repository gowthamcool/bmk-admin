import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  data: any[]=[];
  propertyId='';
  activeProperty:any={};
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyId=this.route.snapshot.params['id'];
    this.http.get('http://localhost:5000/api/product').subscribe((res:any)=>{
      this.data=res as Array<any>;
      this.activeProperty=this.data.find(val=>{
       if( val.propertyId==this.propertyId){
         return val;
       }
        console.log("Vale::"+val.propertyId+":::this:::"+this.propertyId);
      });
      console.log(this.activeProperty);
    });
  }

}
