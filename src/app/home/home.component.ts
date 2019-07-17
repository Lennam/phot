import { HomeService } from '../service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dailyPicUrl: string;
  slogen: string;

  constructor(private homeService: HomeService) {
    this.slogen =
      '我会拼命地远走，去探寻更多的未知。这样，无论我的余生如何短暂与挣扎，都不遗憾。';
  }

  ngOnInit() {}
}
