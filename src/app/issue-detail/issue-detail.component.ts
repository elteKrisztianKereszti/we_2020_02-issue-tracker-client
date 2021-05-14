import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  public issue: Issue;

  constructor(private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.issue = this.issueService.getIssue(id);
  }

  public deleteIssue(): void {
    this.issueService.deleteIssue(this.issue.id)
    this.router.navigate(['/issues']);
  }
}
