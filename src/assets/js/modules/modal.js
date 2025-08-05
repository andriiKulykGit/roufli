import { $, on } from '../helpers/dom.js'

export const init = () => {
  on(document, 'click', (e) => {
    const openButton = e.target.closest('[aria-haspopup="dialog"][aria-controls]')
    if (openButton) {
      e.preventDefault()
      const targetID = openButton.getAttribute('aria-controls')
      const targetModal = document.getElementById(targetID)
      if (targetModal) {
        targetModal.showModal()
      }
    }

    if (e.target.matches('.modal')) {
      const modal = e.target.closest('.modal')
      if (modal) {
        modal.close()
      }
    }
  })

  on($('#toggle-chat'), 'click', (e)=> {
    $('#wrapper').classList.toggle('is-active')
  })

  on($('#close-chat'), 'click', (e)=> {
    $('#wrapper').classList.remove('is-active')
  })
}
