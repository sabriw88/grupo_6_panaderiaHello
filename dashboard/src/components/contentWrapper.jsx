import React, { Component } from "react";

class Product extends Component {
    constructor() {
        super()
        this.state = {
            products: []
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
                console.log(products.ultimo)
                this.setState({
                    id: products.ultimo.id,
                    name: products.ultimo.name,
                    descripcion: products.ultimo.description,
                    price: products.ultimo.price,
                    foto: products.ultimo.foto
                })
            })
            .catch(error => console.log(error)) 

    }

    render() {
        
        return (
           <div className="addProduct">
            <h2>Ultimo Producto Agregado</h2>
            <img src={this.state.foto} alt="foto" />
            <h2>{this.state.name}</h2>
            <h2>{this.state.descripcion}</h2>
           </div>
        )
    }
}

export default Product; 