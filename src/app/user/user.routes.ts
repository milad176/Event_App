import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { LoginComponent } from "./user-login/login.component";

export const userRoutes: Routes = [
  {
    path: "profile",
    component: UserProfileComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];
