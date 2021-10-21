import React from 'react';
// import {useState,useEffect,useRef} from "react";
import {useState,useEffect} from "react";

import SmallCard from './SmallCard';

function ContentRowMovies(){

    // let promesaProductos = fetch("https://chapultepets.herokuapp.com/api/products");
    // let promesaUsuarios = fetch("https://chapultepets.herokuapp.com/api/users");
    // let promesaCategorías = fetch("https://chapultepets.herokuapp.com/api/products/categories");

    // Promise.all([promesaProductos, promesaUsuarios, promesaCategorías])
    // .then(([productos, usuarios, categorias])=>{
    //     console.log(productos);
    //     console.log(usuarios);
    //     console.log(categorias);
    // });

    const [totales, setTotales]=useState([]);

    useEffect(() =>{

        let promesaProductos = fetch("https://chapultepets.herokuapp.com/api/products");
        let promesaUsuarios = fetch("https://chapultepets.herokuapp.com/api/users");
        let promesaCategorias = fetch("https://chapultepets.herokuapp.com/api/products/categories");

        Promise.all([promesaProductos, promesaUsuarios, promesaCategorias])
        .then(async([aa, bb,cc]) => {
            const a = await aa.json();
            const b = await bb.json();
            const c = await cc.json();
            return [a, b, c]
        })
        .then(([dataProductos, dataUsuarios, dataCategorias])=>{
            setTotales([{
                title: 'Total de productos',
                color: 'primary', 
                cuantity: dataProductos.count,
                icon: 'fa-clipboard-list'
            },
            {
                title:'Total de categorías' ,
                color:'warning',
                cuantity:dataCategorias.meta.total,
                icon:'fa-user-check'
            },
            {
                title:' Total de usuarios', 
                color:'success', 
                cuantity: dataUsuarios.meta.Count,
                icon:'fa-award'
            }]);
        })
        .catch(error=>console.log("Errooooooor!"+error));
        // eslint-disable-next-line
    },[]);

    return (
        <div className="row">
            {totales.length===0 && <p>Cargando</p>}
            {
                totales.map( (datos, i) => {
                    return <SmallCard {...datos} key={i}/>
                })
            }
        </div>
    )
}

export default ContentRowMovies;