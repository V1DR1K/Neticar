"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return <span className="mail"><a href={`mailto:${email}`}>{email}</a><button className="copy" type="button" onClick={copy}>{copied ? "Copiado" : "Copiar"}</button><span className="sr-only" aria-live="polite">{copied ? "Correo copiado" : ""}</span></span>;
}
