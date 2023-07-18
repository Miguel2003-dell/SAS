import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

function Comuniones() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "Fecha",
      "Nombre",
      "Padre",
      "Madre",
      {
        name: "Modificar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () =>
                navigate(`/home/bautizo/modificar/${row.cells[4].data}`),
            },
            "Modificar"
          );
        },
      },
      {
        name: "Eliminar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-danger",
              onClick: () => navigate(`/home/bautizo/eliminar/${row.cells[4].data}`),
            },
            "Eliminar"
          );
        },
      },
      {
        name: "Visualizar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () => navigate(`/home/bautizo/traer/${row.cells[4].data}`),
            },
            "Visualizar"
          );
        },
      },
      {
        name: "Imprimir",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () => navigate(`/home/bautizo/traeri/${row.cells[4].data}`),
            },
            "Imprimir"
          );
        },
      },
    ],
      width: "auto",
    search: true,
    pagination: {
      enabled: true,
      limit: 10,
      summary: true,
    },
    sort: true,
    style: {
      th: {
        background: "#bdbdbd",
        color: "#000000",
        border: "3px solid #ccc",
        "text-allign": "center",
      },
    },
    autoWidth: true,
    language: {
      search: {
        placeholder: "🔍 Buscar...",
      },
      pagination: {
        previous: "⬅️",
        next: "➡️",
        showing: "😃 Mostrando",
        results: () => "registros",
      },
    },
    server: {
      url: "http://127.0.0.1:5000/bautizos",
      then: (data) =>
        data.result.map((bautizo) => [
          bautizo.fecha_nac,
          bautizo.nombre,
          bautizo.padre,
          bautizo.madre,
          bautizo.id_ba,
        ]),
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <h1>Registros de Bautizos</h1>
      <div ref={wrapperRef} />
    </>
  );
}

export default Comuniones;
