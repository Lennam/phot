import { Observable } from 'rxjs';
import { ArticalService } from './../../service/artical.service';
import { Component, OnInit } from '@angular/core';
import { Artical } from 'src/app/class';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent implements OnInit {
  articals$: Observable<Artical[]>;

  constructor(public articalService: ArticalService) {}

  ngOnInit() {
    this.getArticals();
  }

  getArticals() {
    this.articals$ = this.articalService
      .getArticals(1)
      .pipe(map(item => item.articals));
  }
}
