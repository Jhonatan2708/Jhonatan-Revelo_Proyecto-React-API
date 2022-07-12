import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import "./App.css"
import Categories from './components/Categories';

function App() {
  
  /*
  *USE STATES 
  */
  //PARA LA OBTENCION DE PERSONAJES
  const [characters, setCharacters]= useState([]);

  //PARA PAGINACION
  const [info, setInfo] = useState({});

  //PARA BARRA DE BUSQUEDA
  const [search, setSearch]= useState("");
  /* * */
  

  /*
  *VARIABLES QUE CONTIENEN LAS URLS DE LA API
  */
  //VARIABLE CON LA URL PARA LA BUSQUEDA
  const searchUrl = (name)=>{
    return `https://rickandmortyapi.com/api/character/?name=${name}`
  };

  //VARIABLE CON LA URL FILTRO
  const categoryUrlSpecies = (specie)=>{
    return `https://rickandmortyapi.com/api/character/?species=${specie}`
  };

  //VARIABLE CON LA URL PRINCIPAL
  let mainURL="https://rickandmortyapi.com/api/character";
  /* * */


  /*
  *FUNCION DE LA CONECCION A LA API
  */
  const fecthCharacters = (url)=>{
    fetch(url)
   .then((response) => response.json())
   .then((data) => {
      setInfo(data.info);
      setCharacters(data.results);
    }) 
   .catch((error) => console.log(error)); 
  };
  /* * */

  /*
  *FUNCIONES ARGUMENTO 
  */
  //PARA FILTRO
  const onHuman= () => {
    fecthCharacters((categoryUrlSpecies("human")));
  };

  const onAlien = () => {
    fecthCharacters((categoryUrlSpecies("alien")));
  };
  
  //PARA PAGINACION
  const onPrevious= () => {
    fecthCharacters((info.prev));
  };

  const onNext= () => { 
    fecthCharacters((info.next));
  };
  
  //PARA BUSCADOR
  const handleSearch = () => {
    (fecthCharacters((searchUrl(search))))
  }
  /* * */
  
  /* USE EFFECT PARA CONEXION
  *
  */
  useEffect(()=>{
    fecthCharacters(mainURL);
  }, []);

  
  return (
    <main className="App">
      <header className='app__header'>
        <NavBar />
        <section className='header__search'>
          <input className='search__input' type="text" onChange={(event) => { setSearch(event.target.value)}}/>
          <button className='search__button' onClick={handleSearch}> 
            Buscar
          </button>
        </section>
      </header>

      <Categories 
      onHuman={onHuman}
      onAlien={onAlien}/>

      <section className='characters--grid'>
        <Characters 
        characters={characters}/>
      </section>

      <section>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </section>
    </main>
  );
}

export default App;
