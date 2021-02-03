<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.in">
    <img src="https://dyte-uploads.s3.ap-south-1.amazonaws.com/dyte-logo-dark.svg" alt="Logo" width="80">
  </a>

  <h3 align="center">dyte-plugin-react-template</h3>

  <p align="center">
    A template for React projects using `dyte-plugin-sdk`.
    <br />
    <a href="https://github.com/dyte-in/dyte-plugin-react-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.dyte.in">View Demo</a>
    ·
    <a href="https://github.com/dyte-in/dyte-plugin-react-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-in/dyte-plugin-react-template/issues">Request Feature</a>
  </p>
</p>




<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project

This repository can be used as a template for React projects using the [dyte-plugin-sdk](https://www.npmjs.com/package/dyte-plugin-sdk).

### Built With

* [dyte-plugin-sdk](https://www.npmjs.com/package/dyte-plugin-sdk)
* [React.js](https://reactjs.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need the following:
* npm
* node

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/dyte-in/dyte-plugin-react-template.git
cd 
```
2. Install NPM packages
```sh
npm install
```
3. Set the PORT environment variable to 6969.
```sh
echo "PORT=6969" >> .env
```
3. Run the project
```sh
npm start
```


<!-- USAGE EXAMPLES -->
## Usage

Once you have started the `dev` server using `npm start`, open `http://staging.dyte.in`, and use the `LocalhostDev` plugin. You will now be able to see your plugin inside the meeting (this will be accessible only from `localhost`).

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dyte-in/dyte-plugin-react-template/issues) for a list of proposed features (and known issues).


## dyte-plugin-sdk

In this repo, the file [src/App.tsx](./src/App.tsx) sets up `react-router` to redirect all requests to `/main` to the `<Main />` component, which is located in [src/views/main/Main.tsx](src/views/main/Main.tsx).

Inside [Main.tsx](src/views/main/Main.tsx), the `dyte-plugin-sdk` library is imported, and a new plugin is initialized using the following line:

```ts
const plugin = useRef<DytePlugin>(new DytePlugin(PLUGIN_ID)).current;
```

After that, there is a `useEffect` with the `plugin` variable as a dependency. This sets up the listeners on the plugin.

```ts
plugin.on(Events.initialized, async () => {
    // The plugin has been initialized.
});


plugin.on(Events.peerJoined, (peer) => {
    // The participant `peer` has joined.
});

plugin.on(Events.peerClosed, (peer) => {
    // The participant `peer` left.
});

plugin.on(Events.chatMessage, (message) => {
    // A chat message was received.
})
```

There are some other methods on the plugin object which you may use. Here are some of them.

```ts
// This returns a list of participants that have joined the meeting.
plugin.getJoinedPeers();


// Gets the name of the room/meeting.
plugin.getRoomName();


// Gets the `peer` object for the current participant using the plugin (on the client side).
plugin.getCurrentPeer();


// Triggers a custom event.
plugin.triggerEvent(data);

// You can listen for this custom event using:
plugin.on(Events.pluginEvent, (data) => {
    // Use data here.
});


// Stores data temporarily on the dyte meeting. (You can store only small amounts of data).
plugin.storeData(data);

// This also triggers an event, so that the other peers may directly get the newly stored data.
plugin.on(Events.pluginData, (data) => {
    // Use data here.
});


// Get data that has been stored on the meeting.
plugin.getData();
```


## Examples

You can checkout the following repos as examples of existing open-source plugins.

- [dyte-in/chess-plugin](https://github.com/dyte-in/chess-plugin)
- [dyte-in/youtube-plugin](https://github.com/dyte-in/youtube-plugin)

> Note: Some of these repos might be using older versions of the `dyte-plugin-sdk`. The version used in this repository will be mentioned in the `package.json` file, under `dependencies`.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->