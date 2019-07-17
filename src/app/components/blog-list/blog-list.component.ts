import { ArticalTitle } from './../../class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogList: ArticalTitle[];

  constructor() {
    this.blogList = [
      { title: '134sdgav', time: '291-21412-23', category: ['js', 'sdfd'] },
      { title: '134adgasdsg', time: '291-21412-23', category: ['js', 'sdfd'] },
      { title: '134werewrwer', time: '291-21412-23', category: ['js', 'sdfd'] }
    ];
  }

  ngOnInit() {}
}
