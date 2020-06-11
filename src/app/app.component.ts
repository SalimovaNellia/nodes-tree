import {Component, OnInit} from '@angular/core';
import {Node} from "../../model/node";
import importedNodes from "../assets/tree.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  nodes: Array<Node>;

  constructor() { }

  ngOnInit(): void {
    this.nodes = importedNodes;
  }

  title = 'tree-angular';

}
