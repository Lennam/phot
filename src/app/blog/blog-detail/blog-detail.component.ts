import { ArticalService } from './../../service/artical.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artical } from 'src/app/class';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  artical$: Observable<Artical>;
  constructor(
    private route: ActivatedRoute,
    private articalService: ArticalService
  ) {}

  ngOnInit() {
    this.getArtical();
  }

  getArtical() {
    this.artical$ = this.route.paramMap.pipe(
      switchMap(pramas => {
        return this.articalService.getArtical(pramas.get('id'));
      })
    );
    // console.log(this.artical$);
  }
}
