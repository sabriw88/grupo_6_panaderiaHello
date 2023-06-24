import React, { Component } from "react";
import Prueba from "./prueba";


class User extends Component {
	constructor() {
		super()
		this.state = {
			users: []
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
				this.setState({ products: products.count,
				                todo: products })
			})
			.catch(error => console.log(error))

		fetch('/api/users')
			.then(respuesta => {
				return respuesta.json()
			})
			.then(users => {
				//console.log(movies)
				this.setState({ users: users })
			})
			.catch(error => console.log(error))


		fetch('/api/categoria')
			.then(respuesta => {
				return respuesta.json()
			})
			.then(categorias => {
				//console.log(movies)
				this.setState({ categorias: categorias.countByCategory })
			})
			.catch(error => console.log(error))


	}




	render() {

		return (
			<div className="row">

				<Prueba

					name="Total de Productos"
					totalUsers={this.state.products}

				/>
				<Prueba

					name="Total de Usuarios"
					totalUsers={this.state.users.total}

				/>
				<Prueba

					name="Total de Categorias"
					totalUsers={this.state.categorias}

				/>

				<h2></h2>

			</div>
		)
	}
}

export default User;