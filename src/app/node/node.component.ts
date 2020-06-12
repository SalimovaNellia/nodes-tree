import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Node} from "../../../model/node";
import {ModalService} from "../modal.service";

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

  constructor(private modalService: ModalService) { }

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

  openModal(id: string) {
    console.log('id', id);
    console.log(this.modalService);

    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
