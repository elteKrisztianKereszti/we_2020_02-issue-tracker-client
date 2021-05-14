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

  public async ngOnInit(): Promise<void> {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.issue = await this.issueService.getIssue(id);
    }
  }

  public async deleteIssue(): Promise<void> {
    await this.issueService.deleteIssue(this.issue.id)
    this.router.navigate(['/issues']);
  }
}
