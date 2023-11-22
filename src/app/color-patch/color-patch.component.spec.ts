import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPatchComponent } from './color-patch.component';

describe('ColorPatchComponent', () => {
  let component: ColorPatchComponent;
  let fixture: ComponentFixture<ColorPatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPatchComponent]
    });
    fixture = TestBed.createComponent(ColorPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
