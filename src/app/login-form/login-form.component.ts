import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  registerForm: FormGroup;
 

  
  constructor()
   { }
  go()
  {
  
  }
  
  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl ('', [Validators.required,Validators.email]),
        password: new FormControl ('', [Validators.required])
    
     });
   }
  
   onSubmit()
   {
     console.log(this.registerForm.value);  
    alert("Sucessfully Login !!!!");

   }

}
