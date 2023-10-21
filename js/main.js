function initAnchors() {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').slice(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
}

/**
 * Используем обработчик события DOMContentLoaded,
 * чтобы выполнять функции только когда загружен полный DOM.
 * Это позволяет избежать ошибок, когда JS загружен, а элементы еще не существуют
 */
document.addEventListener('DOMContentLoaded', () => {
  // initAnchors()
})
