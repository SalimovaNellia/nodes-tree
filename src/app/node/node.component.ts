import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Node} from "../../../model/node";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @ViewChild('newItem', {static: false}) newItem: ElementRef;

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

  addNewItem() {
    let valueInput = this.newItem.nativeElement.value;
    if (valueInput) {
      let newItem = new Node(valueInput, '', []);
      this.node.children.push(newItem);
    }
  }


}
