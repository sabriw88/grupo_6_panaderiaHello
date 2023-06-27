import React, { Component } from "react";
/* import Product from "./contentWrapper"; */
import ProductList from "./productList";

class PanelProducts extends Component {
    constructor() {
        super()
        this.state = {
            todo: []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount() {


        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
                //console.log(movies)
                this.setState({
                    todo: products.data
                })
            })
            .catch(error => console.log(error))

    }


    render() {

        return (
            <React.Fragment>

           

                <div className="cajaPrincipal">
                <h2 className="subtituloListProduct">Listado de productos</h2>
                <br></br>
                <table className="tabla">
                    <thead className="tablaCabeza">
                        <tr className="tablaTr">

                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Precio</td>
                            <td>Stock</td>
                            
                        </tr>
                    </thead>
                    <tbody className="tablaBody">
                    {
                    
                    this.state.todo.map((product, index)=>{
                          return(<ProductList {...product} key={index} />)
                       })
                       
                    }

                </tbody>
                </table>
                <br />
                <br />
                <hr />

                </div>
            </React.Fragment>


        )
    }
}

export default PanelProducts; 