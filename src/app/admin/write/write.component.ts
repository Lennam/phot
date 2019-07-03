import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  markdown: string;
  title: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() {
    this.markdown = '';
    this.title = '';
  }



  ngOnInit() {}
}
