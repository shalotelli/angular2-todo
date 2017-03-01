import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public list: ListService) { 
    for (let i = 1; i <= 10; i++) {
      let dueDate = new Date(),
          newItem: Item = {
            title: 'Item ' + i,
            dueDate: dueDate
          };

      dueDate.setDate(dueDate.getDate() + i);

      this.list.addItem(newItem);
    }
  }

  ngOnInit() {
  }

}
