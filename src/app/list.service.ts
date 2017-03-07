import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class ListService {
  items: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleDone(index: number) {
    this.items[index].done =! this.items[index].done;
  }

}
