import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InfoShareService} from '../service/info-share.service';
import {UserService} from '../service/user.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {InfoStorageService} from '../service/info-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private infoShareService: InfoShareService,
              private userService: UserService,
              private messageService: NzMessageService,
              private router: Router,
              private infoStorageService: InfoStorageService) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe(
          (res) => {
            this.infoShareService.updateUserInfo(res.data);
            this.messageService.create('success', res.message);
            this.router.navigate(['/home']);
            this.infoStorageService.setCookie(document.cookie);
          },
          (error) => {
            this.messageService.create('error', error);
          }
        );
    } else {
      for (const key of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
