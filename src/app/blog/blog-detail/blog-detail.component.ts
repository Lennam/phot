import { ArticalService } from './../../service/artical.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artical } from 'src/app/class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  artical: Artical;
  constructor(
    private route: ActivatedRoute,
    private articalService: ArticalService
  ) {}

  ngOnInit() {
    this.getArtical();
  }

  getArtical() {
    const id = this.route.snapshot.paramMap.get('id');
    this.articalService.getArtical(id).subscribe(result => {
      this.artical = result.data.artical;
      console.log(this.artical);
    });
  }
}
