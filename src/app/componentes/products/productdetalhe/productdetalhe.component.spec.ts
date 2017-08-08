import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetalheComponent } from './productdetalhe.component';

describe('ProductdetalheComponent', () => {
  let component: ProductdetalheComponent;
  let fixture: ComponentFixture<ProductdetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
