import { Component, Input, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';

@Component({
  selector: 'app-primeng-btn',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './primeng-btn.component.html',
  styleUrl: './primeng-btn.component.scss',
})
export class PrimengBtnComponent extends BaseWidget implements OnDestroy {
  @Input() label = '';
  public override serialize(): NgCompInputs | undefined {
    return this.label ? { label: this.label } : undefined;
  }
  constructor() {
    super();
    console.log('Comp A created');
  }
  ngOnDestroy() {
    console.log('Comp A destroyed');
  } // test to make sure cleanup happens
}
