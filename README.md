# React Youtube App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Execution

1. First, create an *.env* file in the root of the project.
2. Add

```javascript
### REACT_APP_YOUTUBE_API_KEY=XXXXXXX
```

3. In the project directory, you can run:

```javascript
npm start
```

Runs the app in the development mode.\
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

