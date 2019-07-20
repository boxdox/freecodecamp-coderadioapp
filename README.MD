# FreeCodeCamp CodeRadio
I know you guys are tired of keeping a tab open on the over-weight Chrome, just to listen to the awesome FreeCodeCamp tunes. This project aims to create a fairly light app that plays CodeRadio, without the need to run RAM Sucking Chrome.

_Note Currently, this project runs on [Neutralino](https://neutralino.js.org/), but I have plans to make a library independent binary._

This app runs on Windows and Linux at this time. There's no MacOS support by Neutralino, so I can't do anything about it.

PS: Firefox is no exception.

PPS: This project is in alpha stage. There are many things broken (what can you expect from a program made in 2 hours by a noob?). I am working on them.

## Performance
The app is consuming about 15-20Mb of RAM on both my Windows and Linux machines. Much better than 500Mb RAM hogged by Chrome.

## TaskList
- [x] Working Streams from API
- [x] Switch streams based on audio quality
- [ ] Update Metadata like current song and number of listeners
- [ ] Add Album art
- [ ] Sync time with API
- [ ] Get rid of ugly interface (maybe not :P)
- [ ] Add music visualizer

## Usage
Download the zip or tar.gz from the [releases page](https://github.com/boxdox/freecodecamp-coderadioapp/releases)

- Execute like a normal app on Windows.

- Linux Only (from terminal):
  -  Change to the directory
  -  `chmod +x coderadio`
  -  `./coderadio`

### License
(MIT 2019 Boxdox)[https://boxdox.mit-license.org]