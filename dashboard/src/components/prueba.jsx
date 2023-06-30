import React from "react";

function Prueba(props) {
    return (
        <React.Fragment>
            <div className="caja">
                <h3>{props.name}:</h3>
                <p>{props.totalUsers}</p>
            </div>
        </React.Fragment>

    )
}

export default Prueba;