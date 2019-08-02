import { ArticalService } from './../../service/artical.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artical } from 'src/app/class';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  artical$: Observable<Artical>;
  loading = false;
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
        this.loading = true;
        return this.articalService.getArtical(pramas.get('id')).pipe(
          map(item => {
            this.loading = false;
            const scrollToTop = window.setInterval(() => {
              const pos = window.pageYOffset;
              if (pos > 0) {
                window.scrollTo(0, pos - 180); // how far to scroll on each step
              } else {
                window.clearInterval(scrollToTop);
              }
            }, 16);
            return item.artical;
          })
        );
      })
    );
    // console.log(this.artical$);
  }
}
