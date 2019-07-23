import { ArticalService } from './../service/artical.service';
import { Component, OnInit } from '@angular/core';

export interface Artical {
  id: string;
  title: string;
  content: string;
  category: string[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articals: Artical[] = [];
  constructor(public articalService: ArticalService) {}

  ngOnInit() {
    this.getArticals();
  }

  getArticals() {
    this.articalService.getArticals(1).subscribe(result => {
      this.articals = result.data.articals.list;
    });
  }
}
