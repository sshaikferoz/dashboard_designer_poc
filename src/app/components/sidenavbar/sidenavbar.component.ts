import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { PrimengBtnComponent } from '../../pre-compiled-components/primeng-btn/primeng-btn.component';
import { PrimengTableComponent } from '../../pre-compiled-components/primeng-table/primeng-table.component';

import { GridStack } from 'gridstack';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    PrimengBtnComponent,
    PrimengTableComponent,
    CommonModule,
  ],
})
export class SidenavbarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  visibleSidebar: boolean = true;
  componentData: any;
  components = [
    { name: 'Component 1', selector: 'app-primeng-btn' },
    { name: 'Component 2', selector: 'app-primeng-btn' },
  ];

  grid: GridStack | undefined;

  ngOnInit(): void {
    this.grid = GridStack.init({
      cellHeight: 80,
      acceptWidgets: true,
    });
  }

  onDragStart(event: DragEvent, component: any) {
    event.dataTransfer?.setData('component', JSON.stringify(component));
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.componentData = event.dataTransfer?.getData('component');
    const component = JSON.parse(this.componentData);

    // Create a new grid item and add the component to it
    const widget = document.createElement('div');
    widget.className = 'grid-stack-item';
    widget.innerHTML = `<div class="grid-stack-item-content">
                          <${component.selector}></${component.selector}>
                        </div>`;

    this.grid?.addWidget(widget);
  }
}
