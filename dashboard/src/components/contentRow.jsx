import React from "react";


function ContentRow(props) {
    return (
        <div className="row">

			{props.items.map((item, i) =>


				<div key={i + item} className="caja">
					<div className={item.colorDeBorde}>
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{item.cifra}</div>
								</div>
								<div className="col-auto">
									<i className={item.icono}></i>
								</div>
							</div>
						</div>
					</div>

				</div>)}
		</div>

    )
}

export default ContentRow;