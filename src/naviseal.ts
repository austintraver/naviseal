// Format the style of focus borders such that it forms a square.
function stylizeResults() {
    document.querySelectorAll('a > h3').forEach((heading) => {
        heading.parentElement.style['display'] = 'block'
    })
}

// Delete the pesky accessibility pop-up modal.
function removeAccessibilityPopup() {
    let element = document.body.firstElementChild
    while (element.tagName.toLowerCase() !== "div") {
        element = element.nextElementSibling
    }
    while (element.id !== "main") {
        if (element.nextElementSibling.id === "searchform") {
            element = element.nextElementSibling
            continue
        }
        if (element.nextElementSibling.tagName.toLowerCase() !== "div") {
            element = element.nextElementSibling
            continue
        }
        if (element.nextElementSibling.id !== "main") {
            element.nextElementSibling?.remove()
            continue
        }
        element = element.nextElementSibling
    }
    document.querySelector('body > h1')?.remove()
    return
}

// Delete other elements of the search results.
function removeOtherElements() {
    document.querySelectorAll('.mfMhoc').forEach((element) => {
        if (element.textContent.startsWith('People also')) {
            for (let i = 0; i < 4; i++) {
                element = element.parentElement
            }
            element.remove()
        } else if (element.textContent === "Related searches") {
            for (let i = 0; i < 6; i++) {
                element = element.parentElement
            }
            element.remove()
        }
    })
    // Remove the search bar's magnifying glass.
    document.querySelector('button.Tg7LZd').remove()
    // Remove the "..." adjacent to each search result
    document.querySelectorAll('div.B6fmyf').forEach((element) => {
        element.remove()
    })
    // Remove the "Images for <query>" section.
    document.querySelectorAll('div.ULSxyf').forEach((element) => {
        let found = false
        element.querySelectorAll('h3').forEach((heading) => {
            if (heading.innerText.startsWith("Images for")) {
                found = true
            }
        })
        if (found) {
            element.remove()
        }
    })
    // Remove the "Feedback" requests.
    document.querySelectorAll('a.oBa0Fe').forEach((element) => {
        element.remove()
    })
    // Remove any results that are displayed as a scrolling carousel.
    document.querySelectorAll('g-scrolling-carousel').forEach(e => {
        e.closest('.sATSHe')?.remove()
        e.closest('.ULSxyf')?.remove()
    })
    // Remove any results that are displayed as a scrolling carousel.
    document.querySelectorAll('g-section-with-header').forEach(e => {
        e.remove()
    })
}

// Prioritize the search result listings during tab completion.
function prioritizeResults() {
    // Iteratively elevate the priority of each search result.
    const results: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a > h3')
    results.forEach((element) => {
        element.parentElement.tabIndex = 1
    })
}

document.addEventListener('DOMContentLoaded', () => {
    removeAccessibilityPopup()
    removeOtherElements()
    // prioritizeResults()
    // Focus the first search result, since the page has already finished loading.
    stylizeResults()
    document.querySelector('a > h3')?.parentElement.focus({preventScroll: true})
})

document.addEventListener('focusin', (event: FocusEvent) => {
    let firstResult = document.querySelector('a > h3').parentElement
    if (event.currentTarget instanceof HTMLBodyElement) {
        alert('yes')
    }
})
