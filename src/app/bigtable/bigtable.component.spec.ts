import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtableComponent } from './bigtable.component';

describe('BigtableComponent', () => {
  let component: BigtableComponent;
  let fixture: ComponentFixture<BigtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
