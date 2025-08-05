export function $(selector, scope = document) {
  return scope.querySelector(selector)
}
export function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector))
}
export function on(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler)
  }
}
export function getSiblings(element) {
  const siblings = []
  const parent = element.parentNode

  if (!parent) {
    return siblings
  }

  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i]
    if (child !== element) {
      siblings.push(child)
    }
  }
  return siblings
}
