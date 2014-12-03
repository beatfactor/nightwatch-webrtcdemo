# Nightwatch WebRTC Demo

Demo test project for [Testing WebRTC apps with Nightwatch](http://nightwatchjs.org/blog/testing-webrtc-apps-with-nightwatch/) blog article.

***

#### [Homepage](http://nightwatchjs.org) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api)

### Running the test

1) Install [Node.js](http://nodejs.org) if not present and clone the repo:
```sh
$ git clone https://github.com/beatfactor/nightwatch-webrtcdemo.git
$ cd nightwatch-webrtcdemo
$ npm install
```

2) Download the `selenium-server-standalone-2.43.1.jar` or newer from http://selenium-release.storage.googleapis.com/index.html and place it in your `bin` folder - remember to update `nightwatch.json` if you download a newer version.

3) Download the `chromedriver` from http://chromedriver.storage.googleapis.com/index.html and place it in your `bin` folder

4) To run the test with 2 chrome peers
```sh
$ ./bin/nightwatch.js --env chrome,chrome
```
