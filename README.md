# PWA Text Editor

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This application is a text editor that runs in the browser. It is a single-page app that meets the PWA criteria. The app features a number of data persistence techniques that serve as redundancy in case on of the options is not supported by the browser. The app also functions offline.

## Installation

To install the dependencies, run ```npm install``.

To start up the app from the backend and server the client, run ```npm run start``` from the root directory.

## Usage

After starting the app and opening the the console, the user will see that the IndexedDB has created a database storage. Content in the text editor will be saved with the IndexedDB when the user enters content and clicks off the DOM window. 

When the user reopens the text editor after closing it, the content will be retrieved from the IndexedDB.

When the user clicks on the Install button, the app is downloaded as an icon on their desktop.

The app has a registered service worker that will precache static assets upon loading along with subsequent pages and static assets.


## Deployed Application

The app was deployed using Heroku. 




## Technologies

Webpack, IndexedDB

## Credits

[lcfhines](https://github.com/lcfhines)

## License

This application is covered by [MIT License](https://choosealicense.com/licenses/mit/).
