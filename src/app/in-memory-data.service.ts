import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Wanda' },
      { id: 14, name: 'Spiderman' },
      { id: 15, name: 'Iron Man' },
      { id: 16, name: 'Ant Man' },
      { id: 17, name: 'Wonder Woman' },
      { id: 18, name: 'Vision' },
      { id: 19, name: 'Captain America' },
      { id: 20, name: 'Hulk' },
    ];
    return {heroes}
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
