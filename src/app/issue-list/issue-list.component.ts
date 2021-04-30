import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  public issues: Issue[] = [
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

  ngOnInit(): void {
  }

}
