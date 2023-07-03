import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcardsComponent } from './savedcards.component';

describe('SavedcardsComponent', () => {
  let component: SavedcardsComponent;
  let fixture: ComponentFixture<SavedcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedcardsComponent]
    });
    fixture = TestBed.createComponent(SavedcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
