import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {
  @Input() issue: Issue

  public issueForm: FormGroup = this.formBuilder.group({
    'title': [ '', [ Validators.required ] ],
    'description': [ '', [ Validators.required ] ],
    'place': [ '', [ Validators.required, Validators.pattern(/^PC-\d+$/) ] ],
    'status' : [ '', [ Validators.required ] ]
  });

  public get title(): AbstractControl {
    return this.issueForm.get('title');
  }
  public get description(): AbstractControl {
    return this.issueForm.get('description');
  }
  public get place(): AbstractControl {
    return this.issueForm.get('place');
  }
  public get status(): AbstractControl {
    return this.issueForm.get('status');
  }

  constructor(private formBuilder: FormBuilder) { }

  public ngOnChanges(): void {
    this.issueForm.patchValue(this.issue);
  }
}
