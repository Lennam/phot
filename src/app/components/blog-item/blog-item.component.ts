import { Artical } from 'src/app/class';
import { ArticalTitle } from '../../class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() artical: Artical;

  constructor() {}

  ngOnInit() {}
}
