"use client";

import type { ReactNode } from "react";

// Cierra el menú desplegable del celular al tocar un enlace.
export function CloseMenuOnClick({ children }: { children: ReactNode }) {
  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }
      }}
    >
      {children}
    </div>
  );
}
