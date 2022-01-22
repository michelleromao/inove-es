import React, {useState, useEffect} from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header"
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Destaque from "./pages/Destaque";
import Reuniao from "./pages/Reuniao";
import Parceiro from "./pages/Parceiro";
import Projeto from "./pages/Projeto";

const Router = () => {
  const [logged, setLogged] = useState(false);
  const [storage, setStorage] = useState(localStorage.getItem("@userlogged"));

  useEffect(() => {
    if(storage === "" || 
      storage === null ||
      storage === undefined){
      setLogged(false)
      console.log(storage)
    }else{
      setLogged(true)
    }
  }, [storage])

   return(
    <BrowserRouter>
      <Header isLogged={logged}/>
      <Routes>
        <Route element={ <Inicio /> }  path="/" exact />
        <Route element={ <Login /> }  path="/login" />
        <Route element={ <Destaque /> }  path="/destaques" />
        <Route element={ <Reuniao /> }  path="/reunioes" />
        <Route element={ <Parceiro /> }  path="/parceiros" />
        <Route element={ <Projeto /> }  path="/projetos" />
      </Routes>
    </BrowserRouter>
   )
}

export default Router;