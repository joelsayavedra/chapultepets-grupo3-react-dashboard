import './App.css';
import React from 'react';

function App() {
  return (

    <React.Fragment>
      <div class="container" id="contenedor">
        <div class="row">
          <div class="col">
            First in DOM, no order applied
          </div>
          <div class="col order-12">
            Second in DOM, with a larger order
          </div>
          <div class="col order-1">
            Third in DOM, with an order of 1
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
