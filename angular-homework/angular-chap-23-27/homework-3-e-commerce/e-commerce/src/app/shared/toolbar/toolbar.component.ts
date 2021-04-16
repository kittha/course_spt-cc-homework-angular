import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

interface MenuNode {
  name: string;
  url: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Dashboard',
    url: 'Admin',
  }, {
    name: 'Catalog',
    url: '404',
    children: [
      {name: 'Products',
      url: '404',},
      {name: 'Categories',
      url: '404',},
      {name: 'Manufacturers',
      url: '404',},
      {name: 'Product reviews',
      url: '404',},
      {name: 'Product tags',
      url: '404',},
      {name: 'Attributes',
      url: '404',},
    ]
  }, {
    name: 'Sales',
    url: '404',
    children: [
      {name: 'Orders',
      url: '404',},
      {name: 'Shipments',
      url: '404',},
      {name: 'Return requests',
      url: '404',},
      {name: 'Recurring payments',
      url: '404',},
      {name: 'Gift cards',
      url: '404',},
      {name: 'Shopping carts and wishlists',
      url: '404',},
    ]
  }, {
    name: 'Customers',
    url: '404',
    children: [
      {name: 'Customers',
      url: '404',},
      {name: 'Customer roles',
      url: '404',},
      {name: 'Online customers',
      url: '404',},
      {name: 'Vendors',
      url: '404',},
      {name: 'Activity log',
      url: '404',},
      {name: 'Activity Types',
      url: '404',},
      {name: 'GDPR requests (log)',
      url: '404',},
    ]
  }, {
    name: 'Promotions',
    url: '404',
    children: [
      {name: 'Discounts',
      url: '404',},
      {name: 'Affiliates',
      url: '404',},
      {name: 'Newsletter subscribers',
      url: '404',},
      {name: 'Campaigns',
      url: '404',},
    ]
  }, {
    name: 'Content management',
    url: '404',
    children: [
      {name: 'Topics (pages)',
      url: '404',},
      {name: 'Message templates',
      url: '404',},
      {name: 'News items',
      url: '404',},
      {name: 'News comments',
      url: '404',},
      {name: 'Blog posts',
      url: '404',},
      {name: 'Blog comments',
      url: '404',},
      {name: 'Polls',
      url: '404',},
      {name: 'Forums',
      url: '404',},
    ]
  }, {
    name: 'Configuration',
    url: '404',
    children: [
      {name: 'Settings',
      url: '404',},
      {name: 'Email accounts',
      url: '404',},
      {name: 'Stores',
      url: '404',},
      {name: 'Countries',
      url: '404',},
      {name: 'Languages',
      url: '404',},
      {name: 'Currencies',
      url: '404',},
      {name: 'Payment methods',
      url: '404',},
      {name: 'Payment restrictions',
      url: '404',},
      {name: 'Tax providers',
      url: '404',},
      {name: 'Tax categories',
      url: '404',},
      {name: 'Shipping',
      url: '404',},
      {name: 'Access control list',
      url: '404',},
      {name: 'Widgets',
      url: '404',},
      {name: 'Authentication',
      url: '404',},
      {name: 'Local plugins',
      url: '404',},
      {name: 'All plugins and themes',
      url: '404',},
    ]
  }, {
    name: 'System',
    url: '404',
    children: [
      {name: 'System information',
      url: '404',},
      {name: 'Log',
      url: '404',},
      {name: 'Warnings',
      url: '404',},
      {name: 'Maintenance',
      url: '404',},
      {name: 'Message queue',
      url: '404',},
      {name: 'Schedule tasks',
      url: '404',},
      {name: 'Search engine friendly page names',
      url: '404',},
      {name: 'Templates',
      url: '404',},
    ]
  }, {
    name: 'Reports',
    url: '404',
    children: [
      {name: 'Sales summary',
      url: '404',},
      {name: 'Low stock',
      url: '404',},
      {name: 'Bestsellers',
      url: '404',},
      {name: 'Products never purchased',
      url: '404',},
      {name: 'Country sales',
      url: '404',},
      {name: 'Customer reports',
      url: '404',},
    ]
  }, {
    name: 'Help',
    url: '404',
    children: [
      {name: 'Help topics',
      url: '404',},
      {name: 'Community forums',
      url: '404',},
      {name: 'Premium support services',
      url: '404',},
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
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url: node.url,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
