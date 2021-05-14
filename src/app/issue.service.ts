import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [
    {
      id: 1,
      title: 'The issue #1',
      description: 'Fatallica',
      place: 'PC-42',
      status: 'NEW',
    },
    {
      id: 2,
      title: 'MegaIssue',
      description: 'MegaFatal',
      place: 'PC-12',
      status: 'DOING',
    },
    {
      id: 3,
      title: 'Unknown issue',
      description: 'U.F.O',
      place: 'PC-01',
      status: 'DOING',
    },
    {
      id: 4,
      title: 'Broken Windows 10',
      description: 'Everywhere',
      place: 'PC-666',
      status: 'DONE'
    },
  ]

  constructor() { }

  public getIssues(): Issue[] {
    return this.issues;
  }

  public getIssue(id: number): Issue {
    return this.issues.find((i: Issue) => i.id === id);
  }

  public updateIssue(id: number, modifiedIssue: Issue): Issue {
    const issue = this.getIssue(id);
    Object.assign(issue, modifiedIssue);
    return issue;
  }

  public addIssue(newIssue: Issue): Issue {
    newIssue.id = + new Date();
    this.issues.push(newIssue);
    return newIssue;
  }
}
