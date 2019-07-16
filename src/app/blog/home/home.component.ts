import { HomeService } from '../../service/home.service';
import { HomeNav } from '../../class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeNavs: HomeNav[];
  dailyPicUrl: string;

  constructor(private homeService: HomeService) {
    this.homeNavs = [
      { name: 'Blog', route: '/blog' },
      { name: 'Github', route: '/bbbb' },
      { name: 'Playground', route: '/cccc' }
    ];
  }

  ngOnInit() {}
}
