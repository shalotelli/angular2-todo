import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Item } from './item';

@Injectable()
export class ListService {
  items: Item[] = [];

  private storageKey: string = 'list';

  constructor(private localStorageService: LocalStorageService) { 
    let items: Item[] = <Item[]>this.localStorageService.get(this.storageKey);

    if (items && items.length) {
      this.items.length = 0;
      this.items.push.apply(this.items, items);
    }
  }

  addItem(item: Item) {
    this.items.push(item);
    this.sort();
    this.save();
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.save();
  }

  toggleDone(index: number) {
    this.items[index].done =! this.items[index].done;
    this.sort();
    this.save();
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

  private save() {
    this.localStorageService.set(this.storageKey, this.items);
  }

}
