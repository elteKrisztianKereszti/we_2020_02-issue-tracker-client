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

  public selectedIssue: Issue;

  constructor(private issueService: IssueService) {
  }

  public async ngOnInit(): Promise<void> {
    this.issues = await this.issueService.getIssues();
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
