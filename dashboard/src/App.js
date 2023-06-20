import logo from './logo.svg';
import './App.css';
import ContentRow from './components/contentRow';
import React from 'react';
import '../src/assets/css/app.css';


function App() {
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
          cifra: 79,
          icono: "fas fa-award fa-2x text-gray-300"

        }, {
          titulo: "Total de categorias",
          colorDeBorde: "card border-left-warning shadow h-100 py-2",
          cifra: 49,
          icono: "fas fa-user fa-2x text-gray-300"
        }]}


      />
</div>
    </React.Fragment>

  )
}

export default App;
