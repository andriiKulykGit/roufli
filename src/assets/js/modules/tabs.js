import { on, getSiblings } from '../helpers/dom.js'

export const init = () => {
  on(document, 'click', (e) => {
    var tab = e.target.closest('[role="tab"]')

    if (tab && tab.matches('[role="tab"][aria-controls')) {
      var tabPanelId = tab.getAttribute('aria-controls')
      var tabPanel = document.getElementById(tabPanelId)

      if (tabPanel) {
        getSiblings(tabPanel).forEach(panel => {
          panel.setAttribute('hidden', '')
        })

        tabPanel.removeAttribute('hidden')

        getSiblings(tab).forEach(tab => {
          tab.setAttribute('aria-selected', 'false')
        })

        tab.setAttribute('aria-selected', 'true')
      }
    }
  })
}
