import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/mock-heroes';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  //   heroes = HEROES;
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    // Sets the current selected hero
    console.log(hero);
    this.selectedHero = hero;
  }

  getHeros(): void {
    //  Retrieves heroes from the service
    //  This implements a synchronous signature, not realistic for real world
    // this.heroes = this.heroService.getHeroes();
    // Observables - subscribe pass array to the callback
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
