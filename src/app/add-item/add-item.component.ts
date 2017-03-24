import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';
import { Item } from '../item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  submit(title: string, dueDate: Date) {
    let newItem: Item = {
      title: title,
      dueDate: dueDate
    };

    this.listService.addItem(newItem);
  }

}
