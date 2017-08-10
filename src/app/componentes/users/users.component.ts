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

      case 'roleConfirm':
        this.user.roleConfirm = true;
        break;
      case 'roleResolve':
      this.user.roleResolve = true;
        break;
      case 'roleCreate':
      this.user.roleCreate = true;
        break;

      default:
        break;
    }
  }

}
