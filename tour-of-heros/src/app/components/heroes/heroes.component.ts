import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HerosComponent implements OnInit {
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
    this.heroes = this.heroService.getHeroes();
  }
}
