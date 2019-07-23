import { Artical } from 'src/app/class';
import { ArticalTitle } from './../../class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Input() artical: Artical;

  constructor() {}

  ngOnInit() {}
}
