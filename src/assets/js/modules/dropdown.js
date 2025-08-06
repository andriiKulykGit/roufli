import { $ } from '../helpers/dom'
import tippy from 'tippy.js'

export const init = () => {
  var template = $('#avatar-dropdowm')
  if (template) {
    const container = document.createElement('div')
    container.appendChild(document.importNode(template.content, true))

    tippy('.header__avatar', {
      content: container,
      allowHTML: true,
      trigger: 'click',
      placement: 'bottom-end',
      arrow: false,
      animation: 'shift-away',
      interactive: true,
    })
  }

  var menuElement = $('.menu')
  if (menuElement) {
    const container = document.createElement('div')
    container.classList.add('dropdown')
    container.appendChild(menuElement.cloneNode(true))

    tippy('.burger', {
      content: container,
      allowHTML: true,
      trigger: 'click',
      placement: 'bottom-end',
      arrow: false,
      animation: 'shift-away',
      interactive: true,
    })
  }

  var depositElement = $('#deposit-dropdown')
  if (depositElement) {
    const container = document.createElement('div')
    container.appendChild(document.importNode(depositElement.content, true))

    tippy('#deposit', {
      content: container,
      allowHTML: true,
      trigger: 'click',
      placement: 'bottom-end',
      arrow: false,
      animation: 'shift-away',
      interactive: true,
    })
  }
}
