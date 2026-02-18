import { useEffect, useRef } from "react";

interface AccessibilityAnnouncerProps {
  message: string;
  priority?: "polite" | "assertive";
}

export function AccessibilityAnnouncer({ message, priority = "polite" }: AccessibilityAnnouncerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && ref.current) {
      // Limpiar el contenido anterior
      ref.current.textContent = "";
      
      // Pequeño delay para asegurar que el screen reader detecte el cambio
      setTimeout(() => {
        if (ref.current) {
          ref.current.textContent = message;
        }
      }, 100);
    }
  }, [message]);

  return (
    <div
      ref={ref}
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  );
}
