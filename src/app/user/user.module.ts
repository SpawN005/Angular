import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [AddUserComponent, ListUserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
