import React, { Component } from "react";
/* import Product from "./contentWrapper"; */
import ProductList from "./productList";

class PanelCategorias extends Component {
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
                <h2>Listado de productos</h2>
                <table>
                    <thead>
                        <tr>Name</tr>
                        <tr>Descripcion</tr>
                        <tr>precio</tr>
                        <tr>stock</tr>
                    </thead>
                </table>
                <tbody>
                    {
                    
                    this.state.todo.map((product, index)=>{
                          return(<ProductList {...product} key={index} />)
                       })
                       
                    }

                </tbody>



                </div>
            </React.Fragment>


        )
    }
}

export default PanelCategorias; 