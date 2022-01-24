import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header"
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Destaque from "./pages/Destaque";
import Reuniao from "./pages/Reuniao";
import Parceiro from "./pages/Parceiro";
import Projeto from "./pages/Projeto";
import AdicionarProjeto from "./pages/Projeto/Adicionar";
import AdicionarParceiro from "./pages/Parceiro/Adicionar";
import AdicionarDestaque from "./pages/Destaque/Adicionar";
import AdicionarReuniao from "./pages/Reuniao/Adicionar";


const Router = () => {
  const [logged, setLogged] = useState(false);
  const [storage, setStorage] = useState(localStorage.getItem("@userlogged"));

  useEffect(() => {
    if (storage === "" ||
      storage === null ||
      storage === undefined) {
      setLogged(false)
      console.log(storage)
    } else {
      setLogged(true)
    }
  }, [storage])

  return (
    <BrowserRouter>
      <Header isLogged={logged} />
      <Routes>
        <Route element={<Inicio />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Destaque />} path="/destaques" />
        <Route element={<Reuniao />} path="/reunioes" />
        <Route element={<Parceiro />} path="/parceiros" />
        <Route element={<Projeto />} path="/projetos" />
        <Route element={<AdicionarProjeto />} path="/adicionar/projeto" exact />

        <Route element={<AdicionarParceiro />} path="/adicionar/parceiro" exact />
        <Route element={<AdicionarParceiro />} path="/adicionar/empresa" exact />
        <Route element={<AdicionarParceiro />} path="/adicionar/aluno" exact />

        <Route element={<AdicionarDestaque />} path="/adicionar/destaque" exact />
        <Route element={<AdicionarReuniao />} path="/adicionar/reuniao" exact />

      </Routes>
    </BrowserRouter>
  )
}

export default Router;