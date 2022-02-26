This project does the server side rendering of a react webpage, since react is a single page application the whole app is in javascript. So the contents are rendered in the browser using client-side JavaScript library. So the search engine rankings may be negatively impacted as the contents in the page is not loaded. So to remove this problem server-side rendering is used, where the HTML part of the webpage is rendered in the server-side. Making the webpage load faster and SEO friendly.

In this application the web contents is loaded and converted into an HTML file from the server side and added into the index.html file. 
For a normal react app if you view the page source in the body it will only contain `<div id="root"></div>`. But here the js file is loaded and the HTML part is taken and stored in between `<div id="root">${app}</div>`. So when search engine looks the webpage is loaded with the data.

### `node server/index.js` 
Run this command in terminal after starting the running the react app. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




