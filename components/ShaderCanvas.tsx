"use client";

import { useEffect, useRef } from "react";

const vertexSource = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragmentSource = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= u_resolution.x / u_resolution.y;
    float wave = sin(uv.x * 1.5 + u_time * 0.5) * 0.3;
    float wave2 = cos(uv.x * 2.0 - u_time * 0.3) * 0.2;
    float mouseGlow = 1.0 - smoothstep(0.0, 1.2, distance(gl_FragCoord.xy / u_resolution.xy, u_mouse));
    float flow = abs(0.1 / (uv.y + wave + wave2));
    vec3 color = vec3(0.5, 0.0, 0.8) * flow;
    color += vec3(0.3, 0.1, 0.6) * (flow * 0.5);
    color += vec3(0.12, 0.0, 0.18) * mouseGlow;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function ShaderCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: true });
    if (!gl) {
      canvas.classList.add("no-webgl");
      return;
    }

    const shader = (type: number, source: string) => {
      const item = gl.createShader(type);
      if (!item) return null;
      gl.shaderSource(item, source);
      gl.compileShader(item);
      return gl.getShaderParameter(item, gl.COMPILE_STATUS) ? item : null;
    };
    const vertex = shader(gl.VERTEX_SHADER, vertexSource);
    const fragment = shader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const time = gl.getUniformLocation(program, "u_time");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    let mouse = { x: 0.5, y: 0.5 };
    let frame = 0;

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: (event.clientX - rect.left) / rect.width, y: 1 - (event.clientY - rect.top) / rect.height };
    };
    canvas.addEventListener("pointermove", move);

    const draw = (milliseconds: number) => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(canvas.clientWidth * ratio);
      const height = Math.round(canvas.clientHeight * ratio);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform1f(time, milliseconds * 0.001);
      gl.uniform2f(resolution, width, height);
      gl.uniform2f(mouseLocation, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", move);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
