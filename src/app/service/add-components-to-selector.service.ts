import { Injectable } from '@angular/core';
import { GridstackComponent } from 'gridstack/dist/angular';
import { PrimengBtnComponent } from '../pre-compiled-components/primeng-btn/primeng-btn.component';
@Injectable({
  providedIn: 'root',
})
export class AddComponentsToSelectorService {
  constructor() {
    // register all our dynamic components created in the grid
    GridstackComponent.addComponentToSelectorType([PrimengBtnComponent]);
  }
}
