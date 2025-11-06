import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CArticulo } from './c-articulo';

describe('CArticulo', () => {
  let component: CArticulo;
  let fixture: ComponentFixture<CArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
