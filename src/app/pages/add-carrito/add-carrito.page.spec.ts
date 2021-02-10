import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCarritoPage } from './add-carrito.page';

describe('AddCarritoPage', () => {
  let component: AddCarritoPage;
  let fixture: ComponentFixture<AddCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
