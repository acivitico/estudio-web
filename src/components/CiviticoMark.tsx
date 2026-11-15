// Escudo de Civitico y Cía. Ltda. (entidad legal), redibujado en SVG.
// La C y la diagonal se recortan del escudo, así toma el color del texto
// (currentColor) sobre cualquier fondo.
export function CiviticoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 152 176"
      className={className}
      role="img"
      aria-label="Civitico y Cía. Ltda."
    >
      <defs>
        <mask id="civitico-cut">
          <rect width="152" height="176" fill="white" />
          <path
            d="M100 46.7 A33 33 0 1 0 100 87.3"
            fill="none"
            stroke="black"
            strokeWidth="26"
          />
          <line x1="0" y1="132" x2="152" y2="0" stroke="black" strokeWidth="3" />
        </mask>
      </defs>
      <g fill="currentColor" mask="url(#civitico-cut)">
        <rect x="0" y="0" width="152" height="132" />
        <polygon points="0,137 152,137 152,141 76,176 0,141" />
      </g>
    </svg>
  );
}
