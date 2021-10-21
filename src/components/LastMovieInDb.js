import {useState,useEffect} from "react";
import React from 'react';

function LastMovieInDb(){


    const [producto, setProducto]=useState(0);

    useEffect(() =>{

        fetch("https://chapultepets.herokuapp.com/api/products")
        .then(response=>response.json())
        .then(data=>{
            setProducto(data.products[data.products.length-1]);
        })
        .catch(error=>console.log("Errooooooor!"+error));
        // eslint-disable-next-line
    },[]);


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                <div className="card-body">
                    {producto===0 && <p>Cargando</p>}
                    {
                        <>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={`https://chapultepets.herokuapp.com/img/products/${producto.image}`} alt="Imagen de producto" />
                        </div><p>{producto.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="noopener noreferrer" href={`https://chapultepets.herokuapp.com/products/${producto.id}`}>
                            ir a página del producto
                            </a>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
