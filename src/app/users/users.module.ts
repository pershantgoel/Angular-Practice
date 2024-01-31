import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserRoutingModule } from './users.routing';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    // UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    UserRoutingModule
  ]
})
export class UsersModule { }
