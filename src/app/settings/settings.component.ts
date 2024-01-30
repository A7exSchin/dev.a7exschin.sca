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
  starCitizenPath = '';

  ngOnInit(): void {
    console.log('SettingsComponent INIT');
    this.loadSettings();
   }

   loadSettings() {
    this.tauriService.getAutoDeleteSetting().then(bool => {
      this.autoDelete = bool;
    });

    this.tauriService.getSCPath().then(path => {
      this.starCitizenPath = path;
    });
  }

  changeAutoDeleteSetting() {
    this.tauriService.changeAutoDeleteSetting();
    this.loadSettings();
  }

  setSCPath() {
    console.log('setSCPath');
    this.tauriService.setSCPath();
  }

}
