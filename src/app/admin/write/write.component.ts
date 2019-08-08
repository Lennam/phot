import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../service/category.service';
import { MessageService } from './../../service/message.service';
import { ArticalService } from './../../service/artical.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { MarkedRenderer } from 'ngx-markdown';
// import * as marked from 'marked';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Artical } from 'src/app/class';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';

const moment = _moment;

export interface Category {
  value: string;
  name: string;
}

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class WriteComponent implements OnInit {
  artical$: Observable<Artical>;
  markdown: string;
  title: string;
  categoryList: Category[] = [];
  category: string;
  date = new FormControl();
  id: string;

  constructor(
    private articalService: ArticalService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.markdown = '';
    this.title = '';
    this.category = '';
  }

  ngOnInit() {
    this.getArtical();
    this.categoryService.category().subscribe(result => {
      this.categoryList = result.category;
    });
  }

  getArtical() {
    this.artical$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.articalService
          .getArtical(params.get('id'))
          .pipe(map(item => item.artical));
      })
    );
    this.artical$.subscribe(artical => {
      this.title = artical.title;
      this.date = new FormControl(moment(Number(artical.createDate)));
      this.category = artical.category;
      this.markdown = artical.content;
      this.id = artical.id;
    });
  }

  submit() {
    if (this.id) {
      const body = {
        id: this.id,
        title: this.title,
        content: this.markdown,
        createDate: this.date.value,
        category: this.category
      };
      this.articalService.updateArtical(body).subscribe(result => {
        if (result.data) {
          this.messageService
            .showSnackbar('success', '修改成功')
            .afterDismissed()
            .subscribe(() => {
              this.router.navigate(['/admin/artical']);
            });
        }
      });
    } else {
      const body = {
        title: this.title,
        content: this.markdown,
        createDate: this.date.value,
        category: this.category
      };
      this.articalService.createArtical(body).subscribe(result => {
        if (result.data) {
          this.messageService
            .showSnackbar('success', '发布成功')
            .afterDismissed()
            .subscribe(() => {
              this.router.navigate(['/admin/artical']);
            });
        }
      });
    }
  }
}
