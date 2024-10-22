import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimengBtnComponent } from './pre-compiled-components/primeng-btn/primeng-btn.component';

import { PrimengTableComponent } from './pre-compiled-components/primeng-table/primeng-table.component';

import { MutliLayerComponent } from './components/mutli-layer/mutli-layer.component';

import { GridStack } from 'gridstack';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PrimengBtnComponent,
    PrimengTableComponent,
    MutliLayerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('grid', { static: false }) gridContainer!: ElementRef;

  // grid!: GridStack;

  widgets = [
    { name: 'Button', component: 'app-button' },
    { name: 'Card', component: 'app-card' },
  ];
  title = 'widget_tree_poc';
  grid: any;
  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },

    {
      id: '1001',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1003',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];
  // grid = GridStack.init();
  // grid.addWidget({w: 2, content: 'item 1'});
  // Handle drop into Gridstack

  async ngOnInit(): Promise<void> {
    this.grid = GridStack.init({
      cellHeight: 70,
      acceptWidgets: true,
      removable: '#trash', // drag-out delete class
    });
    GridStack.setupDragIn('.newWidget', {
      appendTo: 'body',
      helper: 'clone',
    });

    let items = [
      { x: 10, y: 0, w: 2, h: 2, content: '4' },
      { x: 0, y: 2, w: 2, h: 2, content: '5' },
      { x: 2, y: 2, w: 2, h: 4, content: '6' },
      { x: 8, y: 2, w: 4, h: 2, content: '7' },
      { x: 0, y: 4, w: 2, h: 2, content: '8' },
      { x: 4, y: 4, w: 4, h: 2, content: '9' },
      { x: 8, y: 4, w: 2, h: 2, content: '10' },
      { x: 10, y: 4, w: 2, h: 2, content: '11' },
    ];
    this.grid.load(items);

    this.grid.on('added removed change', (e: any, items: any) => {
      let str = '';
      items.forEach(function (item: any) {
        str += ' (x,y)=' + item.x + ',' + item.y;
      });
      console.log(e.type + ' ' + items.length + ' items:' + str);
    });
  }
  onDrop(event: any) {}
}
