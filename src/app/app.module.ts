import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {UserService} from './user.service';
import { UserFilterPipe } from './userFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule    
  ],
 
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


