import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  showContent: boolean = false;

  @Input() arr: any[];

  @Input() header: string;

  @Input() errMsg: string;

  @Output() iconAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  iconClicked() {
    this.iconAdd.emit();
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

}
