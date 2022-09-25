import React from  "react";
import ReactDOM from "react-dom";
import './index.css';
import App  from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './components/context/StateProvider';
import { initialState } from './components/context/initialState';
import reducer from './components/context/reducer';


ReactDOM.render(
   <Router>
 <StateProvider initialState={initialState} reducer={reducer}>
 <App />
 </StateProvider>
   </Router>,
   document.getElementById("root")
);
