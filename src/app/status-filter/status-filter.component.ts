import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent {

  @Input() status: string;

  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public onChange() {
    this.filterChanged.emit(this.status);
  }
}
