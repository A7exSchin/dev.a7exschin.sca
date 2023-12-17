#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::path::Path;
use std::process::Command;
use std::io;
use tauri::api::dialog::FileDialogBuilder;
use prefstore::*;
use directories::BaseDirs;
use std::os::windows::process::CommandExt;

const APPLICATION_NAME : &str = "StarCitizen-Assistant";

#[tauri::command]
fn execute_star_citizen() {
    let string_path: String = getpreference(APPLICATION_NAME, "sc_folder", "");
    let sc_path: &Path = &Path::new(&string_path).join("RSI Launcher").join("RSI Launcher.exe");
    execute_program(sc_path).ok();
}

#[tauri::command]
fn delete_shader_cache() {
    if let Some(base_dirs) = BaseDirs::new() {
        let shader_path: &Path = &base_dirs.data_local_dir().join("Star Citizen");
        // Win: %LOCALAPPDATA%/
    delete_directory(shader_path).ok();
    }
}

fn execute_program(path: &Path) -> io::Result<()> {
    Command::new(path)
        .spawn()?
        .wait_with_output()?;
    Ok(())
}

fn delete_directory(path: &Path) -> io::Result<()> {
    std::fs::remove_dir_all(path)
}

#[tauri::command]
fn set_sc_path() {
    FileDialogBuilder::new().pick_folder(|chosen_folder| {
        //TODO: save SC path to preferences
        if Option::is_some(&chosen_folder) {
            savepreference(APPLICATION_NAME, "sc_folder", chosen_folder.expect("User e").to_str().expect(""));
        } else {
            // Do nothing for now, because users can abort the dialog.
        }
        
    });
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            execute_star_citizen,
            delete_shader_cache,
            set_sc_path
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
