# React Youtube App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Execution

1. After cloning the repo run the following command in root and ./backend directories to install node modules
```javascript
### npm install
```
2. Create an *.env* file in the root of the project.
3. Add Youtube API KEY as follows

```javascript
REACT_APP_YOUTUBE_API_KEY=XXXXXXX
```


4. As React runs in browser there is no file system to write to. In order to write a log to a file in the root directory, app sends an API request from React to a server. Then I have that backend server write to the file system.
So, make sure to run the Node backend which will run the server on localhost port 5000. 

```javascript
node backend/app.js
```

5. In the project directory, run the following command to start the front end server:

```javascript
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## App Structure
In order to understand our app structure clearly you can look at component hierarchy which is shown below:

![diagram](https://user-images.githubusercontent.com/3223085/130098710-ade58493-b515-4e3a-8a5a-18dbc508d37d.png)

## React Components
* **App**  - Main app, async calls

* **SearchBar** - Search bar and button

* **VideoDetail** - Video details such as title, description etc.

* **VideoItem** - Embed Youtube player

* **Loader** - Loader while fetching data

* **Error** - Error handling

