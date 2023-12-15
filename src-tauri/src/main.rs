#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::path::Path;
use std::process::Command;
use std::io;

#[tauri::command]
async fn hello_world_command(_app: tauri::AppHandle) -> Result<String, String> {
  println!("I was invoked from JS!");
  Ok("Hello world from Tauri!".into())
}

#[tauri::command]
fn execute_star_citizen() {
    let sc_path = Path::new("C:\\Windows\\System32\\notepad.exe");
    execute_program(sc_path);
}

#[tauri::command]
fn delete_shader_cache() {
    let del_path = Path::new("C:\\Users\\aschindler\\Desktop\\Testdir");
    delete_directory(del_path);
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

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            execute_star_citizen,
            delete_shader_cache,
            hello_world_command
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
