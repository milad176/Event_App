import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";

// No longer valid after connecting to Http

@Injectable({
  providedIn: "root",
})
export class EventRouteActivator implements CanActivate {
  constructor(private eventservice: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventservice.getEvent(+route.params["id"]);
    if (!eventExist) {
      this.router.navigate(["/404"]);
    }
    return eventExist;
  }
}
