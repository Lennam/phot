import { MessageService } from 'src/app/service/message.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(
      result => {
        if (result.data.login.token) {
          window.localStorage.setItem('token', result.data.login.token);
          this.router.navigate(['/admin']);
        }
      },
      error => {
        this.messageService.showSnackbar('warning', error);
      }
    );
    console.warn(this.loginForm.value);
  }
}
