import { AddToastEventProps } from '../components/Toast/ToastContainer'
import { EventManager } from '../lib/EventManager'

export const toastEventManager = new EventManager()

export const toast = ({ type, text, duration }: AddToastEventProps) => {
  toastEventManager.emit('addtoast', { type, text, duration })
}
