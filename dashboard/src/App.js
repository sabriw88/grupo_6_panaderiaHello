/* import logo from './logo.svg'; */
import './App.css';
 import { useState } from "react"; 
 import { useEffect } from "react"; 
import ContentRow from './components/contentRow';
import ContentWrapper from './components/contentWrapper';
import ProductByCategory from './components/ProductByCategory';
import TableProducts from './components/tableProducts';
import React from 'react';
import '../src/assets/css/app.css';


function App() {

 const [usuarios, setUsuarios] = useState([]);

	useEffect(()=>{

		fetch('api/users')
		.then(respuesta=>{
			return respuesta.json()
		})
		.then(usuarios=>{
			setUsuarios({usuarios})
      console.log(usuarios.total)
		})
		.catch(error => console.log(error))

	},[])


  return (
    <React.Fragment >
      <div className='body'>
      <h2>App Dashboard</h2>

      <ContentRow

        items={[{
          titulo: "Total de productos",
          colorDeBorde: "card border-left-primary shadow h-100 py-2",
          cifra: 21,
          icono: "fas fa-film fa-2x text-gray-300"
        }, {
          titulo: "Total de usuarios",
          colorDeBorde: "card border-left-success shadow h-100 py-2",
          cifra: usuarios.total,
          icono: "fas fa-award fa-2x text-gray-300"

        }, {
          titulo: "Total de categorias",
          colorDeBorde: "card border-left-warning shadow h-100 py-2",
          cifra: 49,
          icono: "fas fa-user fa-2x text-gray-300"
        }]}


      />
      
      <ContentWrapper />
      <ProductByCategory />
      <TableProducts />
</div>
    </React.Fragment>

  )
}

export default App;
