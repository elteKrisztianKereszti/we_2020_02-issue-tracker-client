import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    StatusFilterComponent,
    IssueEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
