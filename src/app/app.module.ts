import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule, Router} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';

import { ViewtDriveComponent } from './viewt-drive/viewt-drive.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { PgnComponent } from './pgn/pgn.component';
import {LoginFormComponent} from './login-form/login-form.component'; 
import { HomeComponent } from './home/home.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { EditComponent } from './edit/edit.component';


 const appRoutes: Routes=[
  {path:'home', component: HomeComponent,pathMatch:'full'},
  {path:'create', component:CreateDriveComponent ,pathMatch:'full'},
  {path:'view', component: ViewtDriveComponent,pathMatch:'full'},
  {path:'Login',component:LoginFormComponent,pathMatch:'full' },
  {path:'Edit/:id', component:EditComponent,pathMatch:'full'},
  {path:'', redirectTo:'/home' ,pathMatch:'full'},
  {path:'**', component: PgnComponent,pathMatch:'full'} 

]; 
/* const appRoutes: Routes=[
  {path:'Login',component:LoginFormComponent,pathMatch:'full',
  children: [
    {path:'create', component:CreateDriveComponent ,pathMatch:'full'},
    {path:'view', component: ViewtDriveComponent,pathMatch:'full'},
    {path:'view/:Edit', component:EditComponent,pathMatch:'full'},
    {path:'**', component: PgnComponent,pathMatch:'full'} 
  ]
     }
]; */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   LoginFormComponent, 
    CreateDriveComponent,
    ViewtDriveComponent,
    PgnComponent,
    RegistrationformComponent,
    EditComponent,



    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,HttpModule,HttpClientModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule,MaterialModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
