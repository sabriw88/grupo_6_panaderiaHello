import React from "react";

function Prueba(props) {
    return (
        <React.Fragment>
            <div className="caja">
                <h2>{props.name}</h2>
                <h2>{props.totalUsers}</h2>
            </div>
        </React.Fragment>

    )
}

export default Prueba;