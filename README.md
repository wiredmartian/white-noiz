# RadAudio Mobile App

RadAudio is an online audio distribution platform available as demo @
http://whitenoiz.azurewebsites.net

This app uses RadAudio's Web API 2 also hosted on azure @
http://api-whitenoiz.azurewebsites.net

## API Endpoints
`/api/tracks` - Gets all songs with their associated artists

`/api/toptracks` - Gets all top songs based on plays and date they were uploaded

`/api/tracks/{id}` - Gets One track's details

`/api/artists/{id}` - Gets an artist's details

`/token` - Bearer authentication endpoint (accepts: username/email, password and grant_type)


## Get Started
**This is Ionic 3 with Angular 4. Before cloning this, make sure you have Ionic and the Angular-CLI install** 
```bash
$ npm install -g ionic@latest cordova

$ cd .\white-noiz

$ npm install

$ npm run ionic: serve (OR $ ionic serve)
```

## Screenshots

<p align="center">
  <img src="https://github.com/MeggaTym/white-noiz/blob/master/resources/screenshots/screen-1.png" width="300" style="padding:2px"/>
  <img src="https://github.com/MeggaTym/white-noiz/blob/master/resources/screenshots/screen-2.png" width="300" style="padding:2px"/>
  <img src="https://github.com/MeggaTym/white-noiz/blob/master/resources/screenshots/screen-3.png" width="300" style="padding:2px"/>
  <img src="https://github.com/MeggaTym/white-noiz/blob/master/resources/screenshots/screen-4.png" width="300" style="padding:2px"/>
  <img src="https://github.com/MeggaTym/white-noiz/blob/master/resources/screenshots/screen-5.png" width="300" style="padding:2px"/>
</p>
