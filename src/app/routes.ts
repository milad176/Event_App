import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./erroes/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator-service";
import { EventListResolver } from "./events/events-list-resolver-service";
import { CreatSessionComponent } from "./events/event-details/creat-session.component";
import { EventResolver } from './events/event-resolver.service';

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    resolve:{event: EventResolver} ,
  },
  {
    path: "events/session/new",
    component: CreatSessionComponent,
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];
