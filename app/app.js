// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions
import FACTIONS from './definitions/factions';
import SETTINGS from './definitions/settings';
import BG_MUSIC from './sounds/Planning.mp3';


const MOUNT_NODE = document.getElementById('app');

// Game debug mode
window.realm = {
  debug: false,
  name: SETTINGS.DEFAULT_PLAYER_NAME,
  faction: FACTIONS.royalists,
  audioPlaying: null,
}

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE,
  );
};

const audio = new Audio(BG_MUSIC);
audio.loop = true;

const startGameAudio = () => {
  /* the audio is now playable; play it if permissions allow */
  if (!window.realm.debug) {
    audio.play();
    window.realm.audioPlaying = audio;
  }
}

audio.addEventListener('canplaythrough', startGameAudio);

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
