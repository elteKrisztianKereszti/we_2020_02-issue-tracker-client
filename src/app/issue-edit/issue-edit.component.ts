import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {
  public issue: Issue;

  constructor(private issueService: IssueService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.issue = this.issueService.getIssue(id);
    }
  }

  public onSaveChanges(modifiedIssue: Issue): void {
    if (this.issue) {
      this.issueService.updateIssue(this.issue.id, modifiedIssue);
      this.location.back();
    }
    else {
      this.issueService.addIssue(modifiedIssue);
      this.router.navigate(['/issues']);
    }
  }
}
