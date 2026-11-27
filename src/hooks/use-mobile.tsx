import { useSyncExternalStore } from "react"

const MOBILE_BREAKPOINT = 768
const mobileQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribe(callback: () => void) {
  const media = window.matchMedia(mobileQuery)
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}

function getSnapshot() {
  return window.matchMedia(mobileQuery).matches
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
