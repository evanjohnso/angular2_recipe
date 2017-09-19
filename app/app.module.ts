import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [ BrowserModule ],     //allows us to run conditionals in our components
  declarations: [ AppComponent ], //all components that will reside in this module
  bootstrap:    [ AppComponent ]  //minimum required components to run
})

//this is the root module, likely the only one we'll have at our level
export class AppModule { }
