import { useRef } from "react";

export function useAccessibilityAnnouncer() {
  const announcerRef = useRef<HTMLDivElement>(null);

  const announce = (message: string, priority: "polite" | "assertive" = "polite") => {
    if (announcerRef.current) {
      announcerRef.current.setAttribute("aria-live", priority);
      announcerRef.current.textContent = "";
      
      setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = message;
        }
      }, 100);
    }
  };

  const Announcer = () => (
    <div
      ref={announcerRef}
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  );

  return { announce, Announcer };
}
