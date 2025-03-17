import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserService } from 'src/app/services/user.service';
import { TargetComponent } from 'src/app/components/target-component/target.component';
import { MaterialModule } from 'src/app/core/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserListComponent, TargetComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [UserService],
  bootstrap: [],
})
export class UserListModule {}
