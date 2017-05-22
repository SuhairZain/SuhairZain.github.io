# About
My personal portfolio website, created using [InfernoJS](https://github.com/infernojs/inferno). Testing support sponsored by [BrowserStack](http://browserstack.com/).

<img src="images/browserstack.jpg" height=50 alt="Sponsored by BrowserStack"/>

# Running locally

This assumes you have [git](https://git-scm.com/), [node](http://nodejs.org/), npm(installed by default with node) and optionally [yarn](https://yarnpkg.com/) installed on your machine. Please check the respective websites for the latest info on how to install them.


1. Clone the repo using `git clone https://github.com/SuhairZain/SuhairZain.github.io/`.
2. Open the folder in a terminal (in most OSs, this can be done by opening the cloned folder, right clicking and selecting open in terminal).
3. Install dependencies
    * If you have installed yarn, run `yarn`.
    * Otherwise run `npm install`.

Follow the steps below according to what you want to do next.

## Live Webpack Dev Server
Allows you to edit the contents of a file and view the results automatically in your browser without refreshing.

1. Run `npm run serve`.
2. Open the url [http://localhost:8080](http://localhost:8080) in your browser.
3. You'll see that my portfolio is displayed.
4. Change the name in src/home/HomePage.jsx line 41 to yours and save the file.
5. Open the browser window and you'll see the page with your name.

## Development build
Creates a non-minified (read large file) version of the webpage that can be copied and shared around for testing.

1. Run `npm run dev`.
2. Copy the file index.html, and the folders images, css and dist to be shared and opened in any browser.

## Production build
Creates a minified (read small file) version of the webpage for distribution.

1. Run `npm run prod`.
2. Copy the file index.html and the folder images to be shared or hosted.
