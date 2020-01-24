import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private htp:HttpClient){ }

  setreg(x)
  {
  
   return this.htp.post("http://localhost:8080/MiniApp/Register",x);
 
  }
}
