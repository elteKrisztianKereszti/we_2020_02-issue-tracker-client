import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://127.0.0.10:8080/api/issues';

  constructor(private httpClient: HttpClient) { }

  public getIssues(): Promise<Issue[]> {
    return this.httpClient.get<Issue[]>(this.apiUrl).toPromise();
  }

  public getIssue(id: number): Promise<Issue> {
    return this.httpClient.get<Issue>(this.apiUrl + '/' + id).toPromise();
  }

  public updateIssue(id: number, modifiedIssue: Issue): Promise<Issue> {
    return this.httpClient.patch<Issue>(this.apiUrl + '/' + id, modifiedIssue).toPromise();
  }

  public addIssue(newIssue: Issue): Promise<Issue> {
    return this.httpClient.post<Issue>(this.apiUrl, newIssue).toPromise();
  }

  public deleteIssue(id: number): Promise<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + id).toPromise();
  }
}
