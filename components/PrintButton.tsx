"use client";

export function PrintButton() {
  return <button className="cv-print-button" type="button" onClick={() => window.print()}>Imprimir / Guardar como PDF</button>;
}
