import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderContainerComponent } from './orders/order-container/order-container.component';
import { UserContainerComponent } from './users/user-container/user-container.component';
import { UserListComponent } from './users/user-container/user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OrderListComponent } from './orders/order-container/order-list/order-list.component';
import { OrderSingleComponent } from './orders/order-container/order-list/order-single/order-single.component';
import { OrderDetailComponent } from './orders/order-container/order-list/order-single/order-detail/order-detail.component';
import { OrderUserSingleComponent } from './orders/order-container/order-list/order-single/order-user-single/order-user-single.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    PagenotfoundComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    OrderUserSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
