import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Highlight from "./pages/Highlight";
import Meeting from "./pages/Meeting";
import Partner from "./pages/Partner";
import Project from "./pages/Project";
import AddProject from "./pages/Project/Add";
import AddPartner from "./pages/Partner/Add";
import EditPartner from "./pages/Partner/Edit";
import AddHighlight from "./pages/Highlight/Add";
import AddMeeting from "./pages/Meeting/Add";


const Router = () => {
  const [logged, setLogged] = useState(false);
  const [storage, setStorage] = useState(localStorage.getItem("@userlogged"));

  useEffect(() => {
    if (storage === "" ||
      storage === null ||
      storage === undefined) {
      setLogged(false)
    } else {
      setLogged(true)
    }
  }, [storage])

  return (
    <BrowserRouter>
      <Header isLogged={logged} />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Highlight />} path="/destaques" />
        <Route element={<Meeting />} path="/reunioes" />
        <Route element={<Partner />} path="/parceiros" />
        <Route element={<Project />} path="/projetos" />
        <Route element={<AddProject />} path="/adicionar/projeto" exact />

        <Route element={<AddPartner />} path="/adicionar/parceiro" exact />
        <Route element={<AddPartner />} path="/adicionar/empresa" exact />
        <Route element={<AddPartner />} path="/adicionar/aluno" exact />

        <Route element={<EditPartner />} path="/editar/aluno/:id" exact />
        <Route element={<EditPartner />} path="/editar/empresa/:id" exact />
        <Route element={<EditPartner />} path="/editar/parceiro/:id" exact />
        

        <Route element={<AddHighlight />} path="/adicionar/destaque" exact />
        <Route element={<AddMeeting />} path="/adicionar/reuniao" exact />

      </Routes>
    </BrowserRouter>
  )
}

export default Router;