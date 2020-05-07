import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { userRoutes } from "./user.routes";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { LoginComponent } from "./user-login/login.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UserProfileComponent, LoginComponent],
})
export class UserModule {}
