import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavComponent } from './pokemon-fav.component';

describe('PokemonFavComponent', () => {
  let component: PokemonFavComponent;
  let fixture: ComponentFixture<PokemonFavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFavComponent]
    });
    fixture = TestBed.createComponent(PokemonFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
