# RadAudio Mobile App

This is purely a demo of Ionic with TypeScript. It is still in development.


## Important!
**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.


## Table of Contents
 - [Getting Started](#getting-started)
 - [Contributing](#contributing)
 - [Use Cases](#use-cases)
 - [App Preview](#app-preview)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: You may need to add “sudo” in front of any global commands to install the utilities._

## App Preview

[Try it live](https://ionic-team.github.io/ionic-conference-app/www)

All app preview screenshots were taken by running `ionic serve --lab` on a retina display.

- [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.html)

  <img src="resources/screenshots/SchedulePage.png" alt="Schedule">


- [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/about/about.html)

  <img src="resources/screenshots/AboutPage.png" alt="Schedule">


- To see more images of the app, check out the [screenshots directory](https://github.com/ionic-team/ionic-conference-app/tree/master/resources/screenshots)!


## Deploying

* PWA - Un-comment [this](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## File Structure of App
