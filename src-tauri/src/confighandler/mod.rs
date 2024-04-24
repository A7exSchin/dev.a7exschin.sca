use platform_dirs::AppDirs;
use configparser::ini::Ini;


pub fn load_config() {
    let app_dirs = AppDirs::new(Some("StarCitizen-Assistant"), true).unwrap();
    let config_path = app_dirs.config_dir;
    let config_file = config_path.join("config.json");
    let mut config = Ini::new();
}

fn save_config() {
    let app_dirs = AppDirs::new(Some("StarCitizen-Assistant"), true).unwrap();
    let config_path = app_dirs.config_dir;
    let config_file = config_path.join("config.json");
    let mut config = Ini::new();
}
