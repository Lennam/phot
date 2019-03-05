import { HomeNav } from './../class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeNavs: HomeNav[];

  constructor() {
    this.homeNavs = [
      { name: 'blog', route: 'blog' },
      { name: 'bbbb', route: 'bbbb' },
      { name: 'cccc', route: 'cccc' }
    ];
  }

  ngOnInit() {}
}
