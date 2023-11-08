import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpatchesComponent } from './color-patches.component';

describe('ColorPatchesComponent', () => {
  let component: ColorpatchesComponent;
  let fixture: ComponentFixture<ColorpatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorpatchesComponent]
    });
    fixture = TestBed.createComponent(ColorpatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
