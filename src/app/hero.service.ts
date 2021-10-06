import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(): Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;
 }
  constructor() { }
}
