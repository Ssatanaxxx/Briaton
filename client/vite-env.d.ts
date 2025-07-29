/// <reference types="vite-plugin-svgr/client" />

// Для SVG (с поддержкой SVGR)
declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Для JPG (упрощенная версия)
declare module "*.jpg" {
  const src: string;
  export default src;
}

// Для PNG (упрощенная версия)
declare module "*.png" {
  const src: string;
  export default src;
}

// Для SVG как React компонента
declare module "*.svg?react" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
