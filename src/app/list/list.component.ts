import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public list: ListService) {}

  ngOnInit() {
  }

}
