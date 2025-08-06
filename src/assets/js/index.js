import { init as initToc } from './modules/toc.js'
import { init as initDropdown } from './modules/dropdown.js'
import { init as initModal } from './modules/modal.js'
import { init as initTabs } from './modules/tabs.js'
import { init as initCopy } from './modules/copy.js'
import { init as initSelect } from './modules/select.js'

document.addEventListener('DOMContentLoaded', () => {
  initToc()
  initDropdown()
  initModal()
  initTabs()
  initCopy()
  initSelect()
})
