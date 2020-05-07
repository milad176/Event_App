import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ISessions } from "../shared/event.model";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";

@Component({
  selector: "pm-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.css"],
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISessions[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId:number;

  visibleSessions: ISessions[] = [];

  constructor(private auth: AuthService, private voterService: VoterService) {}
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSessions.sort(this.sortByNameAsc)
        : this.visibleSessions.sort(this.sortByVoteDesc);
    }
  }

  toggleVote(session: ISessions) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy === "votes") {
      this.visibleSessions.sort(this.sortByVoteDesc);
    }
  }

  userHasVoted(session: ISessions) {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }

  ngOnInit() {}

  filterSessions(filter) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  sortByNameAsc(s1: ISessions, s2: ISessions) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }
  sortByVoteDesc(s1: ISessions, s2: ISessions) {
    return s2.voters.length - s1.voters.length;
  }
}
