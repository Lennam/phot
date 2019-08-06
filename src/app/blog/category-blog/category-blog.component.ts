import { ArticalService } from './../../service/artical.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'apollo-link';
import { Artical } from 'src/app/class';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-category-blog',
  templateUrl: './category-blog.component.html',
  styleUrls: ['./category-blog.component.sass']
})
export class CategoryBlogComponent implements OnInit {
  articals$: Observable<Artical[]>;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private articalService: ArticalService
  ) {}

  ngOnInit() {
    // this.getArticals();
  }

  // getArticals() {
  //   this.articals$ = this.route.paramMap.pipe(
  //     switchMap(pramas => {
  //       this.loading = true;
  //       return this.articalService.getArticals(pramas.get('category')).pipe(
  //         map(item => {
  //           this.loading = false;
  //           return item.articals;
  //         })
  //       );
  //     })
  //   );
  // }
}
