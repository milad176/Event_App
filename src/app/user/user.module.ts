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
  providers: [
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState,
    },
  ],
})
export class UserModule {}

export function checkDirtyState(component: UserProfileComponent) {
  if (component.isDirty) {
    return window.confirm("Do you really want to logout?");
  }

  return true;
}
