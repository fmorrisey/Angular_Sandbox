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
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // Member Methods
  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    // Sets the current selected hero onClick
    console.log(hero);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeros(): void {
    //  Retrieves heroes from the service
    //  This implements a synchronous signature, not realistic for real world
    // this.heroes = this.heroService.getHeroes();
    // Observables - subscribe pass array to the callback
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
