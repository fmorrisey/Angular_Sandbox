import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  // Replaced to as this was Synchronous
  /**  getHeroes(): Hero[] {
    return HEROES;
    } 
   */
}
