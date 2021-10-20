// import{Route, Link} from "react-router-dom";
// import './App.css';
import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

// import Perfil from './Perfil';
// import ComprasPrevias from './ComprasPrevias';

function App() {
  return (

    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
