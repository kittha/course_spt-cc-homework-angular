import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'; 

interface MenuNode {
  name: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Commonly Used',
  }, {
    name: 'Text Editor',
    children: [
      {name: 'Cursor'},
      {name: 'Find'},
      {name: 'Font'},
      {name: 'Formatting'},
      {name: 'Diff Editor'},
      {name: 'Minimap'},
      {name: 'Suggestions'},
      {name: 'Files'},
    ]
  }, {
    name: 'Workbench',
    children: [
      {name: 'Appearance'},
      {name: 'Breadcrumbs'},
      {name: 'Editor Management'},
      {name: 'Settings Editor'},
      {name: 'Zen Mode'},
      {name: 'Screencast Mode'},
    ]
  }, {
    name: 'Window',
    children: [
      {name: 'New Window'},
    ]
  }, {
    name: 'Features',
    children: [
      {name: 'Explorer'},
      {name: 'Search'},
      {name: 'Debug'},
      {name: 'Testing'},
      {name: 'SCM'},
      {name: 'Extensions'},
      {name: 'Terminal'},
      {name: 'Task'},
      {name: 'Problems'},
      {name: 'Output'},
      {name: 'Comments'},
      {name: 'Remote'},
      {name: 'Timeline'},
      {name: 'Notebook'},
    ]
  }, {
    name: 'Application',
    children: [
      {name: 'Proxy'},
      {name: 'Keyboard'},
      {name: 'Update'},
      {name: 'Telemetry'},
      {name: 'Settings Sync'},
    ]
  }, {
    name: 'Extensions',
    children: [
      {name: 'CSS'},
      {name: 'Emmet'},
      {name: 'Git'},
      {name: 'GitHub'},
      {name: 'GitHub Pull Request'},
      {name: 'Grunt'},
      {name: 'Gulp'},
      {name: 'HTML'},
      {name: 'Jake'},
      {name: 'JavaScript Debugger'},
      {name: 'JSON'},
      {name: 'Less'},
      {name: 'Live Server Config'},
      {name: 'Markdown'},
      {name: 'Merge Conflict'},
      {name: 'Node debug'},
      {name: 'Npm'},
      {name: 'PHP'},
      {name: 'Reference Search'},
      {name: 'SCSS (Sass)'},
      {name: 'Simple Browser'},
      {name: 'TypeScript'},
    ]
  },

];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-flat-tree',
  templateUrl: './flat-tree.component.html',
  styleUrls: ['./flat-tree.component.css']
})
export class FlatTreeComponent implements OnInit {
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
