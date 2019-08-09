import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  pageX: number;
  pageY: number;
  mouseX = 0;
  mouseY = 0;
  style = '';
  constructor() {
    this.pageX = document.documentElement.clientWidth;
    this.pageY = document.documentElement.clientHeight;
  }

  ngOnInit() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    this.mouseY = event.pageY;
    const yAxis = ((this.pageY / 2 - this.mouseY) / this.pageY) * 300;
    // horizontalAxis
    this.mouseX = event.pageX / -this.pageX;
    const xAxis = -this.mouseX * 100 - 100;
    this.style = `translate(${xAxis}%, -${yAxis}%)`;
  }
}
