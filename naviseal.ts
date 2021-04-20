document.addEventListener('DOMContentLoaded', (event) => {
  // const navigationItems : NodeListOf<HTMLElement> = document.querySelectorAll('*')
  // navigationItems.forEach(element => {
  //   if (element.tabIndex == 0) {
  //     element.tabIndex = -1;
  //   }
  // })
  console.debug('Started naviseal, looking for elements...')
  const results: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a > h3')
  results.forEach((element) => {
    element.tabIndex = 1
    element.addEventListener('keydown', (event) => {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault()
        // Trigger the button element with a click
        element.click()
      }
    })
    element.addEventListener('focusin', (event) => {
      element.style.fontWeight = 'bold'
    })
    element.addEventListener('focusout', (event) => {
      element.style.fontWeight = 'unset'
    })
  })
  console.debug(`Ended naviseal after modifying ${results.length} elements.`)
})