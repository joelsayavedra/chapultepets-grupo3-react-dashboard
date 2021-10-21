import React from 'react';
import ChartRow from './ChartRow';
import {useState,useEffect} from "react";

function Chart (){

    const [productos, setProductos]=useState([]);

    useEffect(() =>{

        fetch("https://chapultepets.herokuapp.com/api/products")
        .then(response=>response.json())
        .then(data=>{
            setProductos(data.products);
            console.log(data.products);
        })
        .catch(error=>console.log("Errooooooor!"+error));
        // eslint-disable-next-line
    },[]);


    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Página</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Página</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {productos.length === 0 && <p>Cargando</p>}
                            {
                            productos.map( ( producto , i) => {
                                return <ChartRow { ...producto} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;