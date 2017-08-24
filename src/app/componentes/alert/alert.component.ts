import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService} from 'ng2-bootstrap-modal';

export interface AlertModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent extends DialogComponent<AlertModel, null> implements OnInit, AlertModel {
  title: string;
  message: string;

  constructor(dialogService: DialogService) { 
    super(dialogService);
  }

  ngOnInit() {
  }

}
