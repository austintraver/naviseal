console.log('Started naviseal, looking for elements...')

const visitWebsite = (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault()
    // Trigger the button element with a click
    event.target.click()
  }
}

const results: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a > h3')
results.forEach((element) => {
  element.tabIndex = 1
  element.addEventListener('keydown', visitWebsite)
})

console.log(`Ended naviseal after modifying ${results.length} elements.`)