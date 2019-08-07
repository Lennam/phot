import { ArticalService } from './../../service/artical.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artical } from 'src/app/class';
import { switchMap, map } from 'rxjs/operators';
import { CATEGORY_ENUM } from '../../enums';

@Component({
  selector: 'app-category-blog',
  templateUrl: './category-blog.component.html',
  styleUrls: ['./category-blog.component.scss']
})
export class CategoryBlogComponent implements OnInit {
  articals$: Observable<Artical[]>;
  categoryName: string;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private articalService: ArticalService
  ) {}

  ngOnInit() {
    this.getArticals();
  }

  getArticals() {
    this.articals$ = this.route.paramMap.pipe(
      switchMap(pramas => {
        const categoryValue = pramas.get('category');
        this.categoryName = CATEGORY_ENUM[categoryValue];
        this.loading = true;
        return this.articalService.getArticals(1, categoryValue).pipe(
          map(item => {
            this.loading = false;
            return item.articals;
          })
        );
      })
    );
  }
}
