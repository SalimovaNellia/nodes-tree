import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Node} from "../../../model/node";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input()
  private node: Node;

  listOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleList(event) {
    this.listOpened = !this.listOpened;
    event.target.parentElement.classList.toggle('open');
  }
}
