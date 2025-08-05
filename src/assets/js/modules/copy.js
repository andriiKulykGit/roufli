import { on } from '../helpers/dom'

export const init = () => {
  on(document, 'click', async (e) => {
    const elm = e.target.closest('[data-copy]')

    if (elm) {
      const textToCopy = elm.getAttribute('data-copy')

      if (!textToCopy) {
        console.error('Attr data-copy is empty')
        return
      }

      try {
        await navigator.clipboard.writeText(textToCopy)
      } catch (err) {
        console.error('Error with Clipboard API:', err)
      }
    }
  })
}
