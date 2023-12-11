use std::path::{Path, PathBuf};
use std::process::Command;
use std::io;

pub fn is_directory(path: &Path) -> bool {
    path.is_dir()
}

pub fn is_executable(path: &Path) -> bool {
    let extension = path.extension();
    match extension {
        Some(ext) => ext.to_str().map_or(false, |e| e.to_lowercase() == "exe"),
        None => false,
    }
}

pub fn execute_program(path: &Path) -> io::Result<()> {
    Command::new(path)
        .spawn()?
        .wait_with_output()?;
    Ok(())
}

pub fn delete_directory(path: &Path) -> io::Result<()> {
    std::fs::remove_dir_all(path)
}