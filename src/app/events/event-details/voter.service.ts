import { Injectable } from "@angular/core";
import { ISessions } from "../shared/event.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class VoterService {
  constructor(private http: HttpClient) {}

  addVoter(eventId: number, session: ISessions, voterName: string) {
    session.voters.push(voterName);

    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http
      .post(url, {}, options)
      .pipe(catchError(this.handleError<ISessions>("addVoter")))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISessions, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http
      .delete(url)
      .pipe(catchError(this.handleError("deleteVoter")))
      .subscribe();
  }

  userHasVoted(session: ISessions, voterName: string) {
    return session.voters.some((voter) => voter === voterName);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
