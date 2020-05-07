import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from './shared/event.model';

@Component({
  selector: "pm-event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  ngOnInit() {}
}
