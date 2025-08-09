import { $, on, getSiblings } from '../helpers/dom.js'

export const init = () => {
  on(document, 'click', (e) => {
    const openButton = e.target.closest('[aria-haspopup="dialog"][aria-controls]')
    if (openButton) {
      e.preventDefault()
      const targetID = openButton.getAttribute('aria-controls')
      const targetModal = document.getElementById(targetID)
      if (targetModal) {
        targetModal.showModal()

        var targetTabpanelID = openButton.getAttribute('data-target-tabpanel')
        if (targetTabpanelID) {
          var targetTabpanel = $(`#${targetTabpanelID}`, targetModal)
          var targetTab = $(`[aria-controls="${targetTabpanelID}"]`)

          getSiblings(targetTabpanel).forEach(panel => {
            panel.setAttribute('hidden', '')
          })
          targetTabpanel.removeAttribute('hidden')

          getSiblings(targetTab).forEach(tab => {
            tab.setAttribute('aria-selected', 'false')
          })
          targetTab.setAttribute('aria-selected', 'true')
        }
      }
    }

    if (e.target.matches('.modal')) {
      const modal = e.target.closest('.modal')
      if (modal) {
        modal.close()
      }
    }
  })

  on($('#toggle-chat'), 'click', () => {
    $('#wrapper').classList.toggle('is-active')
  })

  on($('#close-chat'), 'click', () => {
    $('#wrapper').classList.remove('is-active')
  })
}
