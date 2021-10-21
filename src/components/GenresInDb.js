import {useState,useEffect} from "react";
import React from "react";

function LastMovieInDb() {

  const [categorias, setCategorias]=useState([]);

  useEffect(() => {
    fetch("https://chapultepets.herokuapp.com/api/products")
      .then(response => response.json())
      .then(data => {
        let array = [];
        for (let category in data.countByCategory) {
          array.push({
            name: category,
            amount: data.countByCategory[category]
          });
        }
        setCategorias(array);
      })
      .catch(error => console.log("Errooooooor!" + error));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categorias.length === 0 && <p>Cargando</p>}
            {
              categorias.map((categoria,i)=>{
                return <div className="col-lg-6 mb-4" key={`categoria${i}`}>
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{categoria.name} ({categoria.amount})</div>
                </div>
              </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
