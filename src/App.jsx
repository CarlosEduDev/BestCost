import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'



//Páginas
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

//Layout
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';





function App() {

  const [myData, setMyData] = useState([])

  useEffect(() =>{
    //Fazer requisição dos dados do arquivo JSON
    const fetchData = async() => {
      try{
        const response = await fetch('../data/db.json');
        const data = await response.json();

        setMyData(data);

      } catch(error){
        console.log('Erro ao carregar os dados do arquivo JSON')
      }
    };
    fetchData();
  })

  return (

    <Router> 

      <NavBar/>

      <Container customClass='min-height'>
        <Routes>

          <Route exact path="/" element={<Home/>}/> 
          
          <Route path="/contact" element={<Contact/>}/> 
          
          <Route path="/empresa" element={<Empresa/>}/> 

          <Route path="/projects" element={<Projects/>}/> 

          <Route path="/newproject" element={<NewProject/>}/> 
           
          <Route path="/project/:id" element={<Project/>}/> 


        </Routes>
      </Container>

      <Footer/>
    </Router>
    
  );
}

export default App;

