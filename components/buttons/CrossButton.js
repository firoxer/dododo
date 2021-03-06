import React from 'https://unpkg.com/es-react@16.12.0';
import htm from 'https://unpkg.com/htm@2.1.1?module';
const html = htm.bind(React.createElement);

import AbstractButton from './AbstractButton/index.js';

export default function CrossButton({ className, disabled, onClick }) {
  return html`
    <${AbstractButton} className=${'CrossButton ' + className} disabled=${disabled} onClick=${onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
        <g transform="rotate(45, 12, 12)">
          <path d="M 10,0 V 10 H 0 v 4 h 10 v 10 h 4 V 14 H 24 V 10 H 14 V 0 Z" />
        </g>
      </svg>
    </${AbstractButton}>
  `;
}
