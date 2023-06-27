import React, { Component } from "react";


class PanelCategory extends Component {
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
                    todo: products.contadores
                })
            })
            .catch(error => console.log(error))

    }


    render() {

        return (
            <React.Fragment>

                <div className="cajaContadores">
                    {
                       
                    this.state.todo.map((contadores, index)=>{

                          return( 
                            <React.Fragment>
                                <div className="cajaContador">
                                <h3>{contadores.titulo}:</h3>
                                <p>{contadores.total}</p>
                                </div>
                                </React.Fragment>
                            )
                       })
                       
                    }

              </div>
            </React.Fragment>


        )
    }
}

export default PanelCategory; 