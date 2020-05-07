import { Component, OnInit } from "@angular/core";
import { EventService } from "../events/shared/event.service";
import { IEvent, ISessions } from "../events/shared/event.model";
import { AuthService } from "../user/auth.service";

@Component({
  selector: "pm-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  events: IEvent[];
  serachTerm: string = "";
  foundSessions: ISessions[];

  constructor(private eventservice: EventService, public auth: AuthService) {}

  ngOnInit() {
    this.eventservice.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  searchSessions(serachterm) {
    this.eventservice.serachSessions(serachterm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}
