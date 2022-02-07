/// first file that gets called when visiting localhost:3000 when running
// importing a dependency can find these in package.json
//puplic folder contains the actual html 
// public folder is the code for all things related to actual HTML images etc etc 
import ReactDOM from 'react-dom';
// importing the css we want to load in on this page
import './index.css';
//importing the JSX code in ./App
import App from './App';

//render is part of the ReactDOM object
//render takes in two params the jsx code and the html element you want that component to be in the App jsx code will be appended in the #root element
reactDom.render
ReactDOM.render(<App />, document.getElementById('root'));
