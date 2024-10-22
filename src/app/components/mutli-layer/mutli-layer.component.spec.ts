import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliLayerComponent } from './mutli-layer.component';

describe('MutliLayerComponent', () => {
  let component: MutliLayerComponent;
  let fixture: ComponentFixture<MutliLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutliLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MutliLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
