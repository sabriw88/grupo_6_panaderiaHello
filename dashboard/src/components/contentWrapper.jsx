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
                 <h2 className="subtituloUltimoProducto">Ultimo producto agregado</h2>
           
            <hr />
            <br />
            <div className="cajaUltimoProducto">
                <div className="cajaImagen">
                    <img src={this.state.foto} alt="foto" />

                </div>


                <div>
                    <h3>{this.state.name}</h3>
                    <p>{this.state.descripcion}</p>
                </div>

            </div>
            <br />
            <hr />
            </div>
        )
    }
}

export default Product; 