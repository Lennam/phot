import { Component, OnInit } from '@angular/core';
import { transformAnimation } from '../animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [transformAnimation]
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
