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

  async executeStarCitizen() {
    const text = await invoke('execute_star_citizen');
    console.log(text);
  }

  async setSCPath() {
    const text = await invoke('set_sc_path');
    console.log(text);
  }

  async deleteShaderCache() {
    const text = await invoke('delete_shader_cache');
    console.log(text);
  }

  async getAutoDeleteSetting(): Promise<boolean> {
    const boolean : boolean = await invoke('get_auto_delete_setting');
    return boolean;
  }

  async changeAutoDeleteSetting() {
    const text = await invoke('change_auto_delete_setting');
    console.log(text);
  }

  async getSCPath(): Promise<string> {
    const sc_path : string = await invoke('get_sc_path');
    return sc_path;
  }
}
