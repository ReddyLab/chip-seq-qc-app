import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleViewComponent } from './sample-view.component';

describe('SampleViewComponent', () => {
  let component: SampleViewComponent;
  let fixture: ComponentFixture<SampleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
