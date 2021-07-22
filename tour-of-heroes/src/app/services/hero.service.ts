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

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  public getHero(id: number): Observable<Hero> {
    // For now we'll assume that a hero with the specified `id` always exists.
    // Error handling will be added next.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // Replaced to as this was Synchronous
  /* getHeroes(): Hero[] {
    return HEROES;
    } 
   */
}
