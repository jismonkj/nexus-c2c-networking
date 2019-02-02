import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulfulComponent } from './soulful.component';

describe('SoulfulComponent', () => {
  let component: SoulfulComponent;
  let fixture: ComponentFixture<SoulfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoulfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
