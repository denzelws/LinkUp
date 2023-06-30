type ToastProps = {
  type: string
  text: string
}

export const toast = ({ type, text }: ToastProps) => {
  const event = new CustomEvent('addtoast', {
    detail: {
      type,
      text
    }
  })

  document.dispatchEvent(event)
}
