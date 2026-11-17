import Image from "next/image";
import type { CSSProperties } from "react";
import { EmbeddingField } from "./EmbeddingField";
import { Typer } from "./Typer";

const charStyle = (i: number) => ({ "--i": i }) as CSSProperties;

function SplitLine({ text, offset, accentDot = false }: { text: string; offset: number; accentDot?: boolean }) {
  const chars = Array.from(text);
  return <span className="ln" aria-hidden="true">
    {chars.map((ch, i) => <span className="ch" style={charStyle(offset + i)} key={i}>{ch}</span>)}
    {accentDot && <span className="ch dot" style={charStyle(offset + chars.length)}>.</span>}
  </span>;
}

const marquee = ["Desarrollo Full Stack", "Inteligencia artificial", "Productos propios", "Sistemas de gestión", "Integraciones de APIs", "Rosario, Argentina"];

export function Hero() {
  return <>
    <div className="hero on-paper" id="inicio">
      <EmbeddingField />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="cota cota-amber">Desarrollador Full Stack · Rosario, Argentina</p>
            <h1 aria-label="Tomás Colombo."><SplitLine text="Tomás" offset={0} /><SplitLine text="Colombo" offset={5} accentDot /></h1>
            <p className="hero-sub">Sistemas, productos e inteligencia artificial.</p>
            <Typer />
            <div className="hero-actions">
              <a className="btn" href="#trabajo">Ver mi trabajo ↓</a>
              <a className="tlink" href="/cv">Ver CV<span aria-hidden="true">↗</span></a>
              <a className="tlink" href="#contacto">Contacto<span aria-hidden="true">↗</span></a>
            </div>
            <dl className="facts">
              <div><dt>2024</dt><dd>Full Stack en CISB</dd></div>
              <div><dt>4</dt><dd>productos publicados</dd></div>
              <div><dt>IA</dt><dd>Tecnicatura, último año</dd></div>
            </dl>
          </div>
          <div className="art">
            <span className="art-tag cota">01 / Perfil</span>
            <div className="art-frame"><Image src="/images/tomas-colombo-profile-2026.png" alt="Tomás Colombo de espaldas, caminando por un sendero arbolado" fill priority sizes="(max-width: 820px) 400px, 40vw" /></div>
            <div className="stamp" aria-hidden="true"><svg viewBox="0 0 150 150"><defs><path id="stamp-circle" d="M75,75 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" /></defs><circle cx="75" cy="75" r="72" /><text><textPath href="#stamp-circle">NETICAR · FIRMA PERSONAL · 2026 ·</textPath></text></svg></div>
          </div>
        </div>
        <div className="hero-index"><span>Tomás Colombo</span><span>Full Stack + Inteligencia Artificial</span><span>Neticar · firma personal</span></div>
      </div>
    </div>
    <div className="marquee" aria-hidden="true"><div className="marquee-track">
      {[...marquee, ...marquee].map((item, i) => <span key={i}>{item}</span>)}
    </div></div>
  </>;
}
