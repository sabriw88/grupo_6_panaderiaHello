import React from "react";

function ProductList(props) {
    return (
        <React.Fragment>
           <tr>
             <td>{props.name}</td>
            <td>{props.description}</td> 
             <td>{props.price}</td>
           </tr>
        </React.Fragment>

    )
}

export default ProductList;