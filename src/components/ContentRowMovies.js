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

    const [productos, setProductos]=useState([]);

    useEffect(() =>{
        fetch("https://chapultepets.herokuapp.com/api/products",{mode: "no-cors"})
        .then(response=>response.json())
        .then(data=>{
            setProductos(data);
            console.log(data);
            console.log(productos);
        })
        .catch(error=>console.log(error));
    },[])



    // const consigueDatos=async()=>{
        
    // }

    // let promesaProductos = await fetch("https://chapultepets.herokuapp.com/api/products");

    let moviesInDB = {
        title: 'Total de productos',
        color: 'primary', 
        cuantity: 21,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:' Total de usuarios', 
        color:'success', 
        cuantity: '79',
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Total de categorías' ,
        color:'warning',
        cuantity:'49',
        icon:'fa-user-check'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];


    return (
        <div className="row">
            {cartProps.map( (movie, i) => {
                return <SmallCard {...movie} key={i}/>
            })}
        </div>
    )
}

export default ContentRowMovies;