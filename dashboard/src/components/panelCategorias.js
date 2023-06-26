import React, { Component } from "react";
/* import Product from "./contentWrapper"; */
import ProductList from "./productList";

class Categorias extends Component {
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

                <table>
                    <thead>
                        <tr>Name</tr>
                        <tr>Descripcion</tr>
                        <tr>precio</tr>
                    </thead>
                </table>
                <tbody>
                    {
                    
                    this.state.todo.map((product, index)=>{
                          return(<ProductList {...product} key={index} />)
                       })
                       
                    }

                </tbody>




            </React.Fragment>


        )
    }
}

export default Categorias; 