type EventListenerProps = (payload: PayloadProps) => void

type PayloadProps = {
  text: string
  type: 'default' | 'success' | 'danger'
  duration?: number
}

// { [event: string]: EventListenerProps[] }
export class EventManager {
  private listeners: Map<any, any>

  constructor() {
    this.listeners = new Map()
  }

  public on(event: string, listener: EventListenerProps): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }

    this.listeners.get(event).push(listener)
  }

  public emit(event: string, payload: PayloadProps): void {
    if (!this.listeners.has(event)) {
      return
    }

    this.listeners.get(event).forEach((listener) => {
      listener(payload)
    })
  }

  removeListener(event: string, listenerToRemove) {
    const listeners = this.listeners.get(event)
    if (!listeners) {
      return
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    )

    this.listeners.set(event, filteredListeners)
  }
}
