import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class ListService {
  items: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    this.items.push(item);
    this.sort();
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleDone(index: number) {
    this.items[index].done =! this.items[index].done;
    this.sort();
  }

  sort() {
    this.items
      .sort((a: Item, b: Item) => {
        return a.dueDate.valueOf() - b.dueDate.valueOf();
      })
      .sort((a: Item, b: Item) => {
        return (a.done === b.done ? 0 : (a.done ? 1 : -1));
      });
  }

}
