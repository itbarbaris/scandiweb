# Scandiweb Test Application - Slider

Clone this repo, run `npm i` or `yarn` to install dependencies.  

To start local server, run `npm start` or `yarn start` in CLI.  
To build bundle, run `npm run build` or `yarn build` in CLI.

You can transpile TS to JS by running `tsc` command.  

## Usage  

Import `Slider` component from `./components/Slider'  
Pass to it any valid JSX elements.  

I assume that there will always be at least two or more children passed to slider.
(even though it will work with one child as well).  

Slider accepts `className` as props, so you can style the component for your liking.  

By default Slider takes 100% width/height so its parent should have width and height set.
