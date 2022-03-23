import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { InterfaceComponent } from './interface/interface.component';
import { UserSingleComponent } from './user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    InterfaceComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
