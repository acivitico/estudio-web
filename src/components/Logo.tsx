import { site } from "@/config/site";

// Logotipo de zero9, redibujado desde los SVG originales.
// Las letras toman el color del texto (currentColor), el 9 va en lima y
// ".studio" en gris, en la tipografía de código del sitio y en la misma
// línea, a un tamaño legible. withStudio={false} deja solo "zero9".
type Props = { withStudio?: boolean; className?: string };

export function Logo({ withStudio = true, className = "" }: Props) {
  return (
    <svg
      viewBox={withStudio ? "20 61 935 144" : "20 61 511 144"}
      className={`w-auto ${className}`}
      role="img"
      aria-label={site.name}
    >
      <g fill="currentColor">
      <path d="M96 0H975V233H454V236L967 847V1056H96V822H620V819L96 198Z" transform="translate(12.000,202.000) scale(0.09277344,-0.09277344)" />
      <path d="M586 -24C842 -24 1046 122 1085 332H816C789 250 710 197 595 197C440 197 350 298 345 454H1096V533C1096 855 887 1080 576 1080C273 1080 58 849 58 527C58 206 266 -24 586 -24ZM347 642C363 774 450 856 582 856C715 856 803 774 818 642Z" transform="translate(116.360,202.000) scale(0.09277344,-0.09277344)" />
      <path d="M104 0H399V572C399 731 488 815 609 815C659 815 714 811 736 810V1061C712 1062 683 1063 649 1063C510 1063 430 1003 391 876H388V1056H104Z" transform="translate(228.050,202.000) scale(0.09277344,-0.09277344)" />
      <path d="M594 -24C915 -24 1131 196 1131 527C1131 858 915 1080 594 1080C274 1080 58 858 58 527C58 196 274 -24 594 -24ZM594 215C451 215 355 331 355 527C355 724 452 841 594 841C737 841 834 724 834 527C834 331 738 215 594 215Z" transform="translate(303.929,202.000) scale(0.09277344,-0.09277344)" />
      </g>
      <g className="fill-accent">
      <path d="M600 -24C991 -24 1201 292 1201 783C1201 1246 986 1514 614 1514C291 1514 63 1308 63 1004C63 717 273 507 561 507C715 507 841 565 914 679H916C916 401 816 214 603 214C472 214 385 288 363 405H76C102 159 303 -24 600 -24ZM613 739C466 739 355 852 355 1004C355 1157 468 1272 616 1272C762 1272 875 1157 875 1005C875 853 761 739 613 739Z" transform="translate(419.236,202.000) scale(0.09277344,-0.09277344)" />
      </g>
      {withStudio && (
        <text
          x="538"
          y="202"
          fontSize="100"
          textLength="410"
          lengthAdjust="spacingAndGlyphs"
          className="fill-muted font-mono"
        >
          .studio
        </text>
      )}
    </svg>
  );
}
