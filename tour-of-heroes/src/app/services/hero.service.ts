/**
 * // HEROS SERVICE //
 * Used to access and share information across components
 *
 * The constructor contains a singleton service-in-service scenario
 */

// CORE
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//a-rxjs-operator-import tab shortcut

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modules
import { Hero } from '../interfaces/hero'; // Typed Data
import { HEROES } from '../data/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; //URL to web api
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /*******
   * Handle HTTP Operation failure then let app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable results
   *******/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infra
      console.log(error);

      // TODO: better job of transforming the error for user consumption
      this.log(`${operation} failed ${error.message}`);

      // Let he app keep running
      return of(result as T);
    };
  }
  ////////// SEARCH FUNCTIONS //////////

  /* GET heroes whose name contains search term */
  public searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('search heroes', []))
    );
  }

  ////////// CRUD FUNCTIONS //////////

  /** GET ALL: get all heros on the server */
  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
    // http.get(returns a JSON file but adding the Type Hero[] reduces errors)
  }

  /** GET: get hero by id, will 404 if id not found */
  public getHero(id: number): Observable<Hero> {
    // Depreciated Code
    // const hero = HEROES.find((h) => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: Add a the hero to the server */
  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Added a new hero at id=${newHero.id}`)),
      catchError(this.handleError<Hero>('added Hero'))
    );
  }

  /** DELETE: delete the hero from the server */
  public deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`Deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('Deleted Hero'))
    );
  }

  // Depreciated Code
  /* Replaced to as this was Synchronous
  public getHeroes(): Hero[] {
    return HEROES;
    } 
   */
}
