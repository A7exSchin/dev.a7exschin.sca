import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Injectable({
  providedIn: 'root'
})
export class TauriService {

  constructor() {
  }

  get isTauri(): boolean {
    return !!(window && window.__TAURI__);
  }

  async callHelloWorld() {
    const text = await invoke('hello_world_command');
    console.log(text);
  }

  async executeStarCitizen() {
    const text = await invoke('execute_star_citizen');
    console.log(text);
  }

  async setSCPath() {
    const text = await invoke('set_sc_path');
    console.log(text);
  }
}
