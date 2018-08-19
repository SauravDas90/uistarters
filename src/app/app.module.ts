import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { UserCreateComponent } from './users/user-create/user-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
