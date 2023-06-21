import React, {Component} from "react";


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
		fetch('/api/users')
			.then(respuesta => {
				return respuesta.json()
			})
			.then(users => {
				//console.log(movies)
				this.setState({ users: users})
			})
			.catch(error => console.log(error))

	}

	render() {

		return (
			<div className="row">

				<h3>{this.state.users.total}</h3>

				{/* {props.items.map((item, i) =>


					<div key={i + item} className="caja">
						<div className={item.colorDeBorde}>
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{total}</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{item.cifra}</div>
									</div>
									<div className="col-auto">
										<i className={item.icono}></i>
									</div>
								</div>
							</div>
						</div>

					</div>)} */}
			</div>
		)
	}
}

export default User;