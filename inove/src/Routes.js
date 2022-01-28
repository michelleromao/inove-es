import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";

import Project from "./pages/Project";
import AddProject from "./pages/Project/Add";
import EditProject from "./pages/Project/Edit";

import Partner from "./pages/Partner";
import AddPartner from "./pages/Partner/Add";
import EditPartner from "./pages/Partner/Edit";

import Highlight from "./pages/Highlight";
import AddHighlight from "./pages/Highlight/Add";

import Meeting from "./pages/Meeting";
import AddMeeting from "./pages/Meeting/Add";
import EditMeeting from "./pages/Meeting/Edit";



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
        <Route element={<EditProject />} path="/editar/projeto/:ID" exact />


        <Route element={<AddPartner />} path="/adicionar/parceiro" exact />
        <Route element={<AddPartner />} path="/adicionar/empresa" exact />
        <Route element={<AddPartner />} path="/adicionar/aluno" exact />

        <Route element={<EditPartner />} path="/editar/aluno/:id" exact />
        <Route element={<EditPartner />} path="/editar/empresa/:id" exact />
        <Route element={<EditPartner />} path="/editar/parceiro/:id" exact />
        

        <Route element={<AddHighlight />} path="/adicionar/destaque" exact />

        <Route element={<AddMeeting />} path="/adicionar/reuniao" exact />
        <Route element={<EditMeeting />} path="/editar/reuniao/:id" exact />


      </Routes>
    </BrowserRouter>
  )
}

export default Router;