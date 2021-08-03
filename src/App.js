import React from "react";
import "./App.css";
import Main from "./containers/Main";
import Helmet from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
       <title> My Portfolio | Home</title>
       </Helmet>
      <Main />
    </div>
  );
}

export default App;
