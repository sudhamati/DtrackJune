import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(  private _httpclient : HttpClient) { }
  setData(x)
  {
    return this._httpclient.post("http://localhost:8080/TDracker/Cd",x);
  }
  ShowData()
  {
    return this._httpclient.get("http://localhost:8080/TDracker/ViewDriveServlet");
  }
  delete(ShowData)
  {
    return this._httpclient.post("http://localhost:8080/TDracker/DeleteData",ShowData);
  }
  updateData(id)
  {
    return this._httpclient.post("http://localhost:8080/TDracker/update",id);
  }
}
