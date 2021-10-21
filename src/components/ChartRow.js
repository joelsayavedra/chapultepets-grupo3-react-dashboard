import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.brand}</td>
                    <td>{props.price}</td>
                    <td>{props.description}
                        {/* <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul> */}
                    </td>
                    <td><a href={`https://chapultepets.herokuapp.com/products/${props.id}`}>Link</a></td>
                </tr>
            )
    }
    
        

export default ChartRow;