import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 import {CreateService} from './create.service'; 
@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

  createdrive:FormGroup;

  constructor(private _creatService:CreateService ) { } 

  ngOnInit() 
  {
    this.createdrive = new FormGroup(
      {
        companyName: new FormControl ('', [Validators.required]),
        resources: new FormControl ('', [Validators.required]),
        exprequired: new FormControl ('', [Validators.required]),
        ctc: new FormControl ('', [Validators.required]),
        joiningcriteria: new FormControl ('', [Validators.required]),
        bond: new FormControl ('', [Validators.required]),
        position: new FormControl ('', [Validators.required]),
        follow: new FormControl ('', [Validators.required]),
        educriteria: new FormControl ('', [Validators.required]),
        
     });
    
  }
    
  d:any;
  onAdd(){
    alert("SuccessFully Added");
    this._creatService.setData(this.createdrive.value).subscribe(e=>this.d=e );
  }

 

}
