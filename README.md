[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tauri.svg" width="50">

![Maintained][maintained-badge]
[![Make a pull request][prs-badge]][prs]
[![License][license-badge]](LICENSE.md)

[![Build][tauri-build-badge]][tauri-build]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# Introduction

This App is planned as a Companion Applicatin for the Star Citizen game. Various features have been considered.

Currently runs with:

- Angular v17.0.7
- Tauri 1.5.0
- Rust 1.74.0

Big thanks to maximegris' [angular-tauri project](https://github.com/maximegris/angular-tauri).

## Getting Started

TODO

## Project structure

| Folder    | Description                                   |
|-----------|-----------------------------------------------|
| src-tauri | Tauri main process folder (Rust)              |
| src       | Tauri renderer process folder (Web / Angular) |


## Included Commands

| Command                 | Description                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| `npm run web:serve`     | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:prod`      | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run tauri:bundle`  | Builds your application and creates an app consumable based on your operating system                  |

[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/A7exSchin/dev.a7exschin.sca/blob/main/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-red.svg
[prs]: http://makeapullrequest.com

[tauri-build-badge]: https://github.com/A7exSchin/dev.a7exschin.sca/workflows/Tauri%20Build/badge.svg
[tauri-build]: https://github.com/A7exSchin/dev.a7exschin.sca/actions?query=workflow%3A%22Tauri+Build%22

[github-watch-badge]: https://img.shields.io/github/watchers/A7exSchin/dev.a7exschin.sca.svg?style=social
[github-watch]: https://github.com/A7exSchin/dev.a7exschin.sca/watchers
[github-star-badge]: https://img.shields.io/github/stars/A7exSchin/dev.a7exschin.sca.svg?style=social
[github-star]: https://github.com/A7exSchin/dev.a7exschin.sca/stargazers
