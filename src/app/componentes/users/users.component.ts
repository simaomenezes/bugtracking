import { Users } from './../../model/users';
import { Subscription } from 'rxjs/Rx';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];
  user: Users;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.getAll().then(users => this.users = users);
    this.user = new Users();
  }

  save(user: Users): void {
    this.service.save(user).then(user => this.users.push(user));
  }

  selected(value){
    switch (value.currentTarget.id) {

      case 'test1':
        this.user.roleConfirm = true;
        this.user.roleCreate = false;
        this.user.roleResolve = false;
        break;
      case 'test2':
      this.user.roleResolve = true;
      this.user.roleCreate = false;
      this.user.roleConfirm = false;
        break;
      case 'test3':
      this.user.roleCreate = true;
      this.user.roleConfirm = false;
      this.user.roleResolve = false;
        break;

      default:
        break;
    }
  }

}
