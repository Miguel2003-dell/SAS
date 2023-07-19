import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import BarraSuperior from "./components/BarraSuperior";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AgregarB from "./pages/alumnos/bautizos/AgregarB";
import ModificarB from "./pages/alumnos/bautizos/ModificarB";
import Bautizo from "./pages/alumnos/bautizos/Bautizos";
import ImprimirB from "./pages/alumnos/bautizos/ImprimirB";
import VisualizarB from "./pages/alumnos/bautizos/VizualizarB";
import EliminarB from "./pages/alumnos/bautizos/EliminarB";
import AgregarCom from "./pages/alumnos/comuniones/AgregarCom";
import ModificarCom from "./pages/alumnos/comuniones/ModificarCom";
import EliminarCom from "./pages/alumnos/comuniones/EliminarCom";
import VisualizarComu from "./pages/alumnos/comuniones/VisualizarCom";
import Comuniones from "./pages/alumnos/comuniones/Comuniones";
import ImprimirCom from "./pages/alumnos/comuniones/ImprimirCom";
import Confirmacion from "./pages/alumnos/confirmaciones/Confirmacion";
import ImprimirC from "./pages/alumnos/confirmaciones/ImprimirC";
import VisualizarC from "./pages/alumnos/confirmaciones/VisualizarC";
import AgregarC from "./pages/alumnos/confirmaciones/AgregarC";
import ModificarC from "./pages/alumnos/confirmaciones/ModificarC";
import EliminarC from "./pages/alumnos/confirmaciones/EliminarC";
import AgregarM from "./pages/alumnos/matrimonios/AgregarM";
import Matrimonios from "./pages/alumnos/matrimonios/Matrimonios";
import ImprimirM from "./pages/alumnos/matrimonios/ImprimirM";
import ModificarM from "./pages/alumnos/matrimonios/ModificarM";
import VisualizarM from "./pages/alumnos/matrimonios/VisualizarM";
import EliminarM from "./pages/alumnos/matrimonios/EliminarM";

function Login({ setIsLoggedIn }) {
  const [usuario, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (usuario && password) {
      axios
        .post("http://localhost:3001/login", { usuario, password })
        .then((res) => {
          console.log(res);
          const { success, message } = res.data;
          if (success) {
            setIsLoggedIn(true);
          } else {
            setErrorMessage(message || "Credenciales inválidas");
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Error en la solicitud");
        });
    } else {
      setErrorMessage("Por favor, introduce un usuario y contraseña.");
    }
  }

  return (
    <>
      <div className="d-flex vh-100 justify-content-center bg-secondary align-items-center">
        <div className="p-3 bg-red w-25">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="t.text-white" className="texto">Usuario</label>
              <input
                type="text"
                placeholder="Enter User"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="texto">Password</label>
              <input 
                type="password"
                placeholder="Enter Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p  className="text-danger" style={{ paddingLeft: "5vmin" }}>{errorMessage}</p>}
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/home" element={<BarraSuperior />}>
          <Route index element={<Home />} />
          <Route path="bautizo">
            <Route index element={<Bautizo />} />
            <Route path="agregarb" element={<AgregarB />} />
            <Route path="eliminar/:m" element={<EliminarB />} />
            <Route path="modificar/:m" element={<ModificarB />} />
            <Route path="traer/:m" element={<VisualizarB />} />
            <Route path="traeri/:m" element={<ImprimirB />} />
          </Route>
          <Route path="comunion">
            <Route index element={<Comuniones />} />
            <Route path="agregarcom" element={<AgregarCom />} />
            <Route path="eliminar/:m" element={<EliminarCom />} />
            <Route path="modificar/:m" element={<ModificarCom />} />
            <Route path="traer/:m" element={<VisualizarComu />} />
            <Route path="traeri/:m" element={<ImprimirCom />} />
          </Route>
          <Route path="confirmacion">
            <Route index element={<Confirmacion />} />
            <Route path="agregarc" element={<AgregarC />} />
            <Route path="eliminar/:m" element={<EliminarC />} />
            <Route path="modificar/:m" element={<ModificarC />} />
            <Route path="traer/:m" element={<VisualizarC />} />
            <Route path="traeri/:m" element={<ImprimirC />} />
          </Route>
          <Route path="matrimonio">
            <Route index element={<Matrimonios />} />
            <Route path="agregarm" element={<AgregarM />} />
            <Route path="eliminar/:m" element={<EliminarM />} />
            <Route path="modificar/:m" element={<ModificarM />} />
            <Route path="traer/:m" element={<VisualizarM />} />
            <Route path="traeri/:m" element={<ImprimirM />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
