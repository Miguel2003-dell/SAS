import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

function Confirmaciones() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "Fecha",
      "Nombre",
      "Padrino",
      {
        name: "Modificar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () =>
                navigate(`/home/confirmacion/modificar/${row.cells[3].data}`),
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
              onClick: () =>
                navigate(`/home/confirmacion/eliminar/${row.cells[3].data}`),
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
              onClick: () =>
                navigate(`/home/confirmacion/traer/${row.cells[3].data}`),
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
              onClick: () => navigate(`/home/confirmacion/traeri/${row.cells[3].data}`),
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
      url: "http://127.0.0.1:5000/confirmaciones",
      then: (data) =>
        data.result.map((confirmacion) => [
          confirmacion.fecha_conf,
          confirmacion.nombre,
          confirmacion.padrino,
          confirmacion.id_co,
        ]),
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <h1>Registros de Confirmaciones</h1>
      <div ref={wrapperRef} />
    </>
  );
}

export default Confirmaciones;
