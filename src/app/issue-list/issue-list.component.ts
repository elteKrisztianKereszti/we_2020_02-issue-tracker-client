import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  private issues: Issue[] = []
  public selectedStatus: string;
  public filteredIssues: Issue[];

  constructor(private issueService: IssueService) {
    this.issues = issueService.getIssues();
  }

  public ngOnInit(): void {
    this.selectedStatus = '';
    this.filter();
  }

  public onFilterChanged(newStatus: string) {
    this.selectedStatus = newStatus;
    this.filter();
  }

  public filter(): void {
    this.filteredIssues = this.selectedStatus ?
      this.issues.filter((i: Issue) => i.status === this.selectedStatus) :
      this.issues;
  }
}
