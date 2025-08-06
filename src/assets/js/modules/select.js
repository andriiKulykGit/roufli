import { $, $$, on } from '../helpers/dom'

export const init = () => {
  var icons = $$('[data-for]');

  icons.forEach((icon) => {
    var selectId = icon.getAttribute('data-for')
    var select = $(`#${selectId}`);

    on(icon, 'click', () => {
      select.showPicker();
    })
  })
}
