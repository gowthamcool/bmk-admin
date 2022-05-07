import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  images:any[]=[];
  highlights:String[]=[];
  plot=false;
  house=false;
  enquiry = this.fb.group({
    propertyName:['',[Validators.required]],
    purpose:['',[Validators.required]],
    area:[500,[Validators.required,Validators.min,Validators.max]],
    locality:['',[Validators.required]],
    bed:[1,[Validators.required,Validators.min,Validators.max]],
    bath:[1,[Validators.required,Validators.min,Validators.max]],
    parking:[true],
    swimming:[true],
    garden:[true],
    khata:['',[Validators.required]],
    price:[100000,[Validators.required,Validators.min,Validators.max]],
    approval:['',[Validators.required]],
    layout:['',[Validators.required]],
    propertyImages: [[], [Validators.required]],
    status:['',Validators.required],
    address:['',Validators.required],
    description:['Yet to come'],
    electricity:[true],
    drainage:[true],
    water:[true],
    highlight:['',[Validators.required]],
    images:['',[Validators.required]],
    highLights:[[]]
  });
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  selectedFile: File | undefined
  ngOnInit(): void {
  }

  get enquiryFormControl() {
    return this.enquiry.controls;
  }

  onSelect(){
    let purpose=this.enquiry.controls['purpose'].value;
    if(purpose=='plot'){
      this.house=false;
      this.plot=true;
    }
    if(purpose=='house'){
      this.house=true;
      this.plot=false;
    }
  }
  submit(){
    this.enquiry.patchValue({
      highLights:this.highlights,
      propertyImages:this.images
    });
    let postObj={
      propertyName:this.enquiry.value['propertyName'],
      Locality:this.enquiry.value['locality'],
    areaInSqFt:this.enquiry.value['area'],
    propertyType:this.enquiry.value['purpose'],
    description:this.enquiry.value['description'],
    parking:this.enquiry.value['parking'],
    swimmingPool:this.enquiry.value['swimming'],
    garden: this.enquiry.value['garden'],
    bedRooms:this.enquiry.value['bed'],
    bathRooms:this.enquiry.value['bath'],
    price:this.enquiry.value['price'],
    electricity:this.enquiry.value['electricity'],
    water:this.enquiry.value['water'],
    drainage:this.enquiry.value['drainage'],
    highlights:this.enquiry.value['highlights'],
    address:this.enquiry.value['address'],
    status:this.enquiry.value['status'],
    approval:this.enquiry.value['approval'],
    propertyImages:this.enquiry.value['propertyImages'],
    };
    console.log("postObs"+JSON.stringify(postObj));
    console.log("form values::::"+JSON.stringify(this.enquiry.value));
    if(postObj.status=="uc"){
      this.http.post('http://localhost:5000/api/upcoming',postObj).subscribe(res=>{
        console.log("Post method:::"+JSON.stringify(res));
      })
    }
    else{
      this.http.post('http://localhost:5000/api/product',postObj).subscribe(res=>{
      console.log("Post method:::"+JSON.stringify(res));
    });
    }
  }
  addUrl(){
    let imgurl=document.createElement('div');
    let imgworld: any[]=[];
    imgurl.innerHTML=`
    <br>
    <input type="text" placeholder="Enter Image Url" calss="val">
    <button class="btn btn-success addbtn">Add</button>
    `;
    document.querySelector('.images')?.appendChild(imgurl);
    document.querySelector('.addbtn')?.addEventListener("click",function(){
      imgworld.push(document.querySelector('.val')?.nodeValue);
      alert("urladded"+imgworld);
    });

  }
  add(text:string){
    alert("called");
    this.images.push(text);
    console.log(this.images);
  }
  addHighlights(){
    this.highlights.push(this.enquiry.value['highlight']);
    this.enquiry.patchValue({
      highlight:''
    });
  }
  addImages(){
    this.images.push(this.enquiry.value['images']);
    this.enquiry.patchValue({
      images:''
    });
  }
}
