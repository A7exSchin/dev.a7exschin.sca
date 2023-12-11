use std::path::PathBuf;
use tauri::api::process;
use tauri::api::path::{resolve_path, BaseDirectory};

mod config;
mod helper;

use config::*;
use helper::*;

#[tauri::command]
fn set_star_citizen_path(path: String) {
    let resolved_path = resolve_path(&path).expect("Failed to resolve path.");
    set_star_citizen_path(resolved_path.to_string_lossy().to_string());
}

#[tauri::command]
fn set_shader_cache_path(path: String) {
    let resolved_path = resolve_path(&path).expect("Failed to resolve path.");
    set_shader_cache_path(resolved_path.to_string_lossy().to_string());
}

#[tauri::command]
fn execute_star_citizen() {
    if let Some(path) = read().star_citizen_path.as_ref() {
        let resolved_path = resolve_path(path).expect("Failed to resolve path.");
        if is_executable(&resolved_path) {
            match execute_program(&resolved_path) {
                Ok(_) => println!("Star Citizen executed successfully."),
                Err(e) => eprintln!("Error executing Star Citizen: {}", e),
            }
        } else {
            println!("The given Star Citizen path is not an executable file.");
        }
    } else {
        println!("Star Citizen path is not set.");
    }
}

#[tauri::command]
fn delete_shader_cache_directory() {
    if let Some(path) = CONFIG.read().shader_cache_path.as_ref() {
        let resolved_path = resolve_path(path).expect("Failed to resolve path.");
        match delete_directory(&resolved_path) {
            Ok(_) => println!("Shader cache directory deleted successfully."),
            Err(e) => eprintln!("Error deleting shader cache directory: {}", e),
        }
    } else {
        println!("Shader cache path is not set.");
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            set_star_citizen_path,
            set_shader_cache_path,
            execute_star_citizen,
            delete_shader_cache_directory
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}