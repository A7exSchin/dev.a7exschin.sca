import { Component, OnInit } from '@angular/core';
import {TauriService} from '../core/services';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private tauriService: TauriService,
  ) { }

  autoDelete = false;

  ngOnInit(): void {
    console.log('SettingsComponent INIT');
    this.loadAutoDeleteSetting();
   }

   loadAutoDeleteSetting() {
    this.tauriService.getAutoDeleteSetting().then(bool => {
      this.autoDelete = bool;
    });
  }

  changeAutoDeleteSetting() {
    this.tauriService.changeAutoDeleteSetting();
    this.loadAutoDeleteSetting();
  }

}
