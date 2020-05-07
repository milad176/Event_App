import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserModule } from "./user/user.module";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavbarComponent } from "./nav/navbar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./erroes/404.component";
import { CreatSessionComponent } from "./events/event-details/creat-session.component";
import { SessionListComponent } from "./events/event-details/session-list.component";
import { CollapsibleWellComponent } from "./common/collapsible-well/collapsible-well.component";
import { DurationPipe } from "./events/shared/duration.pipe";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service";
import { JQ_TOKEN } from "./common/jQuery.service";
import { SimpleModalComponent } from "./common/modal.componenet/simple-modal.component";
import { ModalTriggerDirective } from "./common/modalTrigger.directive";
import { UpvoteComponent } from "./events/event-details/vote/upvote.component";
import { LocationValidatorDirective } from "./events/create-event/location-validator.directive";

// declare let toastr: Toastr;
let toastr: Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreatSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState,
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr,
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery,
    },
  ],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You did not save the changes. Do you really want to cancel?"
    );
  }

  return true;
}
