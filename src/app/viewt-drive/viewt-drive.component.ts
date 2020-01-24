import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CreateService} from '../create-drive/create.service'; 
import {MatDialog} from '@angular/material';
import {EditComponent} from '../edit/edit.component';

export interface DialogData{
  id:number;
  companyName:string;
  resources:number;
  exprequired:number;
  ctc:number;
  joiningcriteria:any;
  bond:any;
  position:any;
  follow:any;
  educriteria:any;
  
  
}


@Component({
  selector: 'app-viewt-drive',
  templateUrl: './viewt-drive.component.html',
  styleUrls: ['./viewt-drive.component.css']
})
export class ViewtDriveComponent implements OnInit {
  viewdrive:FormGroup;

  displayedColumns: string[] = ['CompanyName','No.Of Resources','Exp Required','CTC','Joining Criteria','Bond','Position','Followp','Education Criteria','update','delete'];

  constructor(private _createService:CreateService,public dialog: MatDialog) { 

  }
  data:any[];
  temp:any;
  ngOnInit() {

    this.dispData();
  }
  dispData()
  {
   return this._createService.ShowData().subscribe((e:any)=>
    {
     return this.data=e
});
    console.log(this.data);
  }

  deleteData(did)
  {
 this._createService.delete(did).subscribe((e:any)=>{
    this.dispData();
  }
  );
console.log("DId = "+did);  
alert(did)  ;               
  }



 /*  id;
	companyName;
	resources;
  exprequired;
	ctc;
  joiningcriteria;
  bond;
	position;
  follow  ;
  educriteria;
 
  editData(i)
  {
    /* this. id=i.id; 
  this.companyName=i.companyName;
  this.resources=i.resources;
  this.exprequired=i.exprequired;
  this.ctc=i.ctc;
  this.joiningcriteria=i.joiningcriteria;
    this.bond=i.bond;
    this.position=i.position;
    this.follow=i.follow;
    this.educriteria=i.educriteria;
  }
  openDialog() {
    const dialogRef = this.dialog.open(EditComponent,{
       data:{id:this.id,
        companyName :this.companyName,
        resources:this.resources,
        exprequired:this.exprequired,
        ctc:this.ctc,
        joiningcriteria:this.joiningcriteria,
        bond:this.bond,
        position:this.position,
        follow:this.follow,
        educriteria:this.educriteria
       }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
     this.dispData(); 
    });
  } */

}
