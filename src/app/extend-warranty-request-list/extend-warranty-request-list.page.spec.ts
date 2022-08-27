import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtendWarrantyRequestListPage } from './extend-warranty-request-list.page';

describe('ExtendWarrantyRequestListPage', () => {
  let component: ExtendWarrantyRequestListPage;
  let fixture: ComponentFixture<ExtendWarrantyRequestListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendWarrantyRequestListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtendWarrantyRequestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
