import { Routes } from '@angular/router';

import { PrimengBtnComponent } from './pre-compiled-components/primeng-btn/primeng-btn.component';
import { MutliLayerComponent } from './components/mutli-layer/mutli-layer.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

export const routes: Routes = [
  { path: 'multi-layer', component: MutliLayerComponent },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: MutliLayerComponent,
      },
    ],
  },
  {
    path: 'sidenavbar',
    component: SidenavbarComponent,
  },
];
