import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintComponent } from './fingerprint.component';

describe('FingerprintComponent', () => {
  let component: FingerprintComponent;
  let fixture: ComponentFixture<FingerprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
