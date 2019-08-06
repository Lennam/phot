import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/class';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList$: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryList$ = this.categoryService
      .category()
      .pipe(map(item => item.category));
  }

  goToCategoryArtical(category) {
    this.route.navigate(['blog/category', category]);
  }
}
