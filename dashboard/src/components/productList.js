import React from "react";

function ProductList(props) {
    return (
        <React.Fragment>
           <tr>
             <td>{props.id}</td>
             <td>{props.name}</td>
           </tr>
        </React.Fragment>

    )
}

export default ProductList;