import { Router } from '@angular/router';
import { CategoryService } from './../../service/category.service';
import { MessageService } from './../../service/message.service';
import { ArticalService } from './../../service/artical.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkedRenderer } from 'ngx-markdown';
import * as marked from 'marked';

export interface Category {
  value: string;
  name: string;
}

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  markdown: string;
  title: string;

  categoryList: Category[] = [];

  category: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  constructor(
    private articalService: ArticalService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.markdown = '';
    this.title = '';
    this.category = '';
  }

  ngOnInit() {
    this.categoryService.category().subscribe(result => {
      this.categoryList = result.data.category;
    });
  }

  submit() {
    // const tokens = marked.lexer(this.markdown);
    // const html = marked.parser(tokens);
    this.articalService
      .createArtical({
        title: this.title,
        content: this.markdown,
        createDate: this.date.value,
        category: this.category
      })
      .subscribe(
        result => {
          this.messageService
            .showSnackbar('success', '发布成功')
            .afterDismissed()
            .subscribe(() => {
              this.router.navigate(['/admin/artical']);
            });
        },
        error => {
          this.messageService.showSnackbar('warning', error);
        }
      );
  }
}
