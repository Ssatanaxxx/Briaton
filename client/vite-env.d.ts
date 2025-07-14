/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  import { ReactComponent } from '*.svg';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
}