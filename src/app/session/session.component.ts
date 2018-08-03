import {Component, OnInit} from '@angular/core';
import {User} from '../pojo/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = null;
  }

  ngOnInit() {
  }

  test() {
    this.userService.testSession()
      .subscribe(
        (data) => this.user = data.data
      );
  }

}
