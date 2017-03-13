import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';
import { ListService } from './list.service';

@Pipe({
  name: 'orderByDoneAndDate',
  pure: false
})
export class OrderByDoneAndDatePipe implements PipeTransform {

  constructor(private listService: ListService) {}

  transform(items: Item[]): Item[] {
    this.listService.sort();
    return this.listService.items;
  }

}
