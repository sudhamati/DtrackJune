import { Component, OnInit } from '@angular/core';
import {DemoService} from './demo.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'; 
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  userform:FormGroup;
  countries = ['India','USA', 'Germany', 'Italy', 'France'];

  constructor(private temp:DemoService) { }
 ngOnInit() 
 {
   this.userform=new FormGroup(
   {
     name:new FormControl('',[Validators.required,Validators.minLength(3)]),
     pass:new FormControl('',[Validators.required,Validators.minLength(4)]),
     mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
     gender:new FormControl(),
     country: new FormControl(),
     mobile: new FormControl('',[Validators.required]),
   });
 }
 d:any;
 adddata()
 {
   // let trend=JSON.parse(localStorage.getItem("first"));
   // if(trend==null)
   // {
   //   trend=[];
   // }
   // trend.push(this.userform.value);
   // localStorage.setItem("first",JSON.stringify(trend));

   this.temp.setreg(this.userform.value).subscribe(e=>this.d=e);
 }

}
