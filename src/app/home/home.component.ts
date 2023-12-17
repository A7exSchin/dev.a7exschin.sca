import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TauriService} from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private tauriService: TauriService,
    ) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  executeStarCitizen() {
    console.log('executeStarCitizen');
    this.tauriService.executeStarCitizen();
  }

  setSCPath() {
    console.log('setSCPath');
    this.tauriService.setSCPath();
  }

  deleteShaderCache() {
    console.log('deleteShaderCache');
    this.tauriService.deleteShaderCache();
  }

}
