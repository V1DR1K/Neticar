"use client";

import { useState } from "react";

export function PrintButton() {
  return <button className="cv-print-button" type="button" onClick={() => window.print()}>Imprimir / Guardar como PDF</button>;
}

/* Usa el menú para compartir del dispositivo; si no existe, copia el enlace. */
export function ShareButton() {
  const [status, setStatus] = useState("");
  const share = async () => {
    const url = window.location.href;
    const data = { title: "CV de Tomás Colombo", text: "CV de Tomás Colombo, desarrollador Full Stack en Rosario.", url };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setStatus("Enlace copiado");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("Copiá el enlace desde la barra de direcciones");
    }
    window.setTimeout(() => setStatus(""), 3000);
  };
  return <>
    <button className="cv-print-button cv-share-button" type="button" onClick={share}>Compartir</button>
    <span className="cv-share-status" role="status">{status}</span>
  </>;
}
