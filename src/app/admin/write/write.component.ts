import { MessageService } from './../../service/message.service';
import { ArticalService } from './../../service/artical.service';
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
  serializedDate = new FormControl(new Date().toISOString());
  constructor(
    private articalService: ArticalService,
    private messageService: MessageService
  ) {
    this.markdown = '';
    this.title = '';
  }

  ngOnInit() {}

  submit() {
    // console.log(this.date.value);
    this.articalService
      .createArtical({
        title: this.title,
        content: this.markdown,
        createDate: this.date.value,
        category: ['js', '13']
      })
      .subscribe(
        result => {
          console.log(result);
        },
        error => {
          this.messageService.showSnackbar('warning', error);
        }
      );
  }
}
