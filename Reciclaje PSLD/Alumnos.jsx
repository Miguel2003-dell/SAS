// import { useNavigate } from "react-router-dom";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

function Alumnos() {
  const wrapperRef = useRef(null);
  // const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "Nombre",
      "edad",
      "direccion",
    ],
    width: "auto",
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
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
      url: "http://127.0.0.1:5000/alumnos",
      then: (data) =>
        data.result.map((alumno) => [
          alumno.nombre,
          alumno.edad,
          alumno.direccion,
        ]),
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <h1>Alumnos</h1>
      <div ref={wrapperRef} />
    </>
  );
}

export default Alumnos;
