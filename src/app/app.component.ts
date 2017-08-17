import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  ola: string;

  constructor(private userService: UsersService){
    this.ola = "dados";






  }


  ngOnInit(): void {

    this.userService.mudaValorEmmit.subscribe(
      valor => this.ola = valor
    );
  }


}
