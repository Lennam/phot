import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(result => {
      console.log(result);
    });
    console.warn(this.loginForm.value);
  }
}
