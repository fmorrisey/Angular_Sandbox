import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // Class Member Variables

  public selectedHero?: Hero;
  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService // private messageService: MessageService
  ) {}

  // Member Methods
  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes(): void {
    //  Retrieves heroes from the service
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));

    // Depreciated
    //  This implements a synchronous signature, not realistic for real world
    // this.heroes = this.heroService.getHeroes();
    // Observables - subscribe pass array to the callback
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  //   onSelect(hero: Hero): void {
  //     // Sets the current selected hero onClick
  //     console.log(hero);
  //     this.selectedHero = hero;
  //     // this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //   }
}
