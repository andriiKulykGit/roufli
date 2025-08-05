import tippy from 'tippy.js'

export const init = () => {
  var template = document.getElementById('avatar-dropdowm')
  if (template) {
    var container = document.createElement('div')
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

  const menuElement = document.querySelector('.menu')

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
}
