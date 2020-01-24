import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'
import {CreateService} from '../create-drive/create.service'; 



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 

  constructor(private _creatService:CreateService, private a:ActivatedRoute) { }
emp:any[];
obj:any={};
i;
  ngOnInit() 
  {
this.i=this.a.snapshot.params['id'];

this._creatService.ShowData().subscribe((e:any)=>{this.emp=e
    for(let i=0;i<this.emp.length;i++)
    {
      if(this.emp[i].id==this.i)
      {
        this.obj=this.emp[i];
        break;
      }
    }
    });
    
  }
    
  d:any;
  onAdd(){
    alert("SuccessFully updated");
    this._creatService.updateData(this.obj).subscribe(e=>this.d=e );
    console.log("data updated");
    console.log(this.obj);
  }

 

}
