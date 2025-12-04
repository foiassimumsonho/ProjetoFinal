import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaleComponent } from './fale.component';

describe('FaleComponent', () => {
  let component: FaleComponent;
  let fixture: ComponentFixture<FaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
