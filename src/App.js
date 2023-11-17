import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import {action, originals,horror} from './Urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
  <div>
    <NavBar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall />
    <RowPost url={horror} title='Horror' isSmall />
  </div>
  );
}

export default App;
