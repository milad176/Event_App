import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISessions } from "../shared/event.model";

@Component({
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = "all";
  sortBy: string = "vote";

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = this.route.snapshot.data["event"];
      this.addMode = false;
    });

    // let id: number = +this.router.snapshot.params["id"];
    // this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  onSaveNewSession(session: ISessions) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    // this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  onCancelAddSession() {
    this.addMode = false;
  }   
}
