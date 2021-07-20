/**
 * // HEROS SERVICE //
 * Used to access and share information across components
 *
 * The constructor contains a singleton service-in-service scenario
 */

import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../data/mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Injects a singleton into the constructor
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // Replaced to as this was Synchronous
  /**  getHeroes(): Hero[] {
    return HEROES;
    } 
   */
}
