// Minimal Meta Pixel helper. Initializes fbq if pixel id is provided

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}

export function initMetaPixel(pixelId?: string) {
  if (!pixelId) return
  if (typeof window === "undefined") return
  if (window.fbq) return

  // Meta Pixel base code (adapted for TS)
  (function (f: any, b: Document, e: string, n?: any) {
    if (f.fbq) return
    n = f.fbq = function () {
      ;(n as any).callMethod
        ? (n as any).callMethod.apply(n, arguments as any)
        : (n as any).queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    ;(n as any).push = (n as any)
    ;(n as any).loaded = !0
    ;(n as any).version = "2.0"
    ;(n as any).queue = []
    const t = b.createElement(e) as HTMLScriptElement
    t.async = true
    t.src = "https://connect.facebook.net/en_US/fbevents.js"
    const s = b.getElementsByTagName(e)[0]
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s)
    } else {
      b.head.appendChild(t)
    }
  })(window, document, "script")

  window.fbq!("init", pixelId)
}

export function track(eventName: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return
  if (!window.fbq) return
  window.fbq("trackCustom", eventName, params || {})
}

export type LeadAnswers = {
  employees: string
  role: string
}

export function isQualifiedLead(answers: LeadAnswers): boolean {
  const disqualifyingEmployees = ["Menos de 5"]
  const disqualifyingRoles = ["Gerente", "Otro"]
  if (disqualifyingEmployees.includes(answers.employees)) return false
  if (disqualifyingRoles.includes(answers.role)) return false
  return true
}


