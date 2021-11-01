// Format the style of focus borders such that it forms a square.
function stylizeResults() {
    document.querySelectorAll('a > h3').forEach((heading) => {
        heading.parentElement.style['display'] = 'block';
    });
}
// Delete the pesky accessibility pop-up modal.
function removeAccessibilityPopup() {
    let element = document.body.firstElementChild;
    while (element.tagName.toLowerCase() !== "div") {
        element = element.nextElementSibling;
    }
    while (element.id !== "main") {
        if (element.nextElementSibling.id === "searchform") {
            element = element.nextElementSibling;
            continue;
        }
        if (element.nextElementSibling.tagName.toLowerCase() !== "div") {
            element = element.nextElementSibling;
            continue;
        }
        if (element.nextElementSibling.id !== "main") {
            element.nextElementSibling?.remove();
            continue;
        }
        element = element.nextElementSibling;
    }
    document.querySelector('body > h1')?.remove();
    return;
}
// Delete other elements of the search results.
function removeOtherElements() {
    document.querySelectorAll('.mfMhoc').forEach((element) => {
        if (element.textContent.startsWith('People also')) {
            for (let i = 0; i < 4; i++) {
                element = element.parentElement;
            }
            element.remove();
        }
        else if (element.textContent === "Related searches") {
            for (let i = 0; i < 6; i++) {
                element = element.parentElement;
            }
            element.remove();
        }
    });
    // Remove the search bar's magnifying glass.
    document.querySelector('button.Tg7LZd').remove();
    // Remove the "..." adjacent to each search result
    document.querySelectorAll('div.B6fmyf').forEach((element) => {
        element.remove();
    });
    // Remove the "Images for <query>" section.
    document.querySelectorAll('div.ULSxyf').forEach((element) => {
        let found = false;
        element.querySelectorAll('h3').forEach((heading) => {
            if (heading.innerText.startsWith("Images for")) {
                found = true;
            }
        });
        if (found) {
            element.remove();
        }
    });
    // Remove the "Feedback" requests.
    document.querySelectorAll('a.oBa0Fe').forEach((element) => {
        element.remove();
    });
    // Remove any results that are displayed as a scrolling carousel.
    document.querySelectorAll('g-scrolling-carousel').forEach(e => {
        e.closest('.sATSHe')?.remove();
        e.closest('.ULSxyf')?.remove();
    });
    // Remove any results that are displayed as a scrolling carousel.
    document.querySelectorAll('g-section-with-header').forEach(e => {
        e.remove();
    });
}
// Prioritize the search result listings during tab completion.
function prioritizeResults() {
    // Iteratively elevate the priority of each search result.
    const results = document.querySelectorAll('a > h3');
    results.forEach((element) => {
        element.parentElement.tabIndex = 1;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    removeAccessibilityPopup();
    removeOtherElements();
    // prioritizeResults()
    // Focus the first search result, since the page has already finished loading.
    stylizeResults();
    document.querySelector('a > h3')?.parentElement.focus({ preventScroll: true });
});
document.addEventListener('focusin', (event) => {
    let firstResult = document.querySelector('a > h3').parentElement;
    if (event.currentTarget instanceof HTMLBodyElement) {
        alert('yes');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aXNlYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpc2VhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUsU0FBUyxjQUFjO0lBQ25CLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNwRCxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUE7SUFDcEQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBRUQsK0NBQStDO0FBQy9DLFNBQVMsd0JBQXdCO0lBQzdCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUE7SUFDN0MsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtRQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxPQUFPLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUMxQixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssWUFBWSxFQUFFO1lBQ2hELE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUE7WUFDcEMsU0FBUTtTQUNYO1FBQ0QsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtZQUM1RCxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO1lBQ3BDLFNBQVE7U0FDWDtRQUNELElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDMUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFBO1lBQ3BDLFNBQVE7U0FDWDtRQUNELE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUE7S0FDdkM7SUFDRCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQzdDLE9BQU07QUFDVixDQUFDO0FBRUQsK0NBQStDO0FBQy9DLFNBQVMsbUJBQW1CO0lBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNyRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ25CO2FBQU0sSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLGtCQUFrQixFQUFFO1lBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ25CO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRiw0Q0FBNEM7SUFDNUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNoRCxrREFBa0Q7SUFDbEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNGLDJDQUEyQztJQUMzQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDeEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFBO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ25CO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRixrQ0FBa0M7SUFDbEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3RELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNGLGlFQUFpRTtJQUNqRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQTtRQUM5QixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsaUVBQWlFO0lBQ2pFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzRCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDZCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCwrREFBK0Q7QUFDL0QsU0FBUyxpQkFBaUI7SUFDdEIsMERBQTBEO0lBQzFELE1BQU0sT0FBTyxHQUFrQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLHdCQUF3QixFQUFFLENBQUE7SUFDMUIsbUJBQW1CLEVBQUUsQ0FBQTtJQUNyQixzQkFBc0I7SUFDdEIsOEVBQThFO0lBQzlFLGNBQWMsRUFBRSxDQUFBO0lBQ2hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0FBQ2hGLENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtJQUN2RCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtJQUNoRSxJQUFJLEtBQUssQ0FBQyxhQUFhLFlBQVksZUFBZSxFQUFFO1FBQ2hELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNmO0FBQ0wsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3JtYXQgdGhlIHN0eWxlIG9mIGZvY3VzIGJvcmRlcnMgc3VjaCB0aGF0IGl0IGZvcm1zIGEgc3F1YXJlLlxuZnVuY3Rpb24gc3R5bGl6ZVJlc3VsdHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSA+IGgzJykuZm9yRWFjaCgoaGVhZGluZykgPT4ge1xuICAgICAgICBoZWFkaW5nLnBhcmVudEVsZW1lbnQuc3R5bGVbJ2Rpc3BsYXknXSA9ICdibG9jaydcbiAgICB9KVxufVxuXG4vLyBEZWxldGUgdGhlIHBlc2t5IGFjY2Vzc2liaWxpdHkgcG9wLXVwIG1vZGFsLlxuZnVuY3Rpb24gcmVtb3ZlQWNjZXNzaWJpbGl0eVBvcHVwKCkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZFxuICAgIHdoaWxlIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJkaXZcIikge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG4gICAgd2hpbGUgKGVsZW1lbnQuaWQgIT09IFwibWFpblwiKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pZCA9PT0gXCJzZWFyY2hmb3JtXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImRpdlwiKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlkICE9PSBcIm1haW5cIikge1xuICAgICAgICAgICAgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc/LnJlbW92ZSgpXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gaDEnKT8ucmVtb3ZlKClcbiAgICByZXR1cm5cbn1cblxuLy8gRGVsZXRlIG90aGVyIGVsZW1lbnRzIG9mIHRoZSBzZWFyY2ggcmVzdWx0cy5cbmZ1bmN0aW9uIHJlbW92ZU90aGVyRWxlbWVudHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1mTWhvYycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQuc3RhcnRzV2l0aCgnUGVvcGxlIGFsc28nKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJSZWxhdGVkIHNlYXJjaGVzXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBSZW1vdmUgdGhlIHNlYXJjaCBiYXIncyBtYWduaWZ5aW5nIGdsYXNzLlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5UZzdMWmQnKS5yZW1vdmUoKVxuICAgIC8vIFJlbW92ZSB0aGUgXCIuLi5cIiBhZGphY2VudCB0byBlYWNoIHNlYXJjaCByZXN1bHRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuQjZmbXlmJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcbiAgICAvLyBSZW1vdmUgdGhlIFwiSW1hZ2VzIGZvciA8cXVlcnk+XCIgc2VjdGlvbi5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuVUxTeHlmJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gzJykuZm9yRWFjaCgoaGVhZGluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGhlYWRpbmcuaW5uZXJUZXh0LnN0YXJ0c1dpdGgoXCJJbWFnZXMgZm9yXCIpKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBSZW1vdmUgdGhlIFwiRmVlZGJhY2tcIiByZXF1ZXN0cy5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLm9CYTBGZScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG4gICAgLy8gUmVtb3ZlIGFueSByZXN1bHRzIHRoYXQgYXJlIGRpc3BsYXllZCBhcyBhIHNjcm9sbGluZyBjYXJvdXNlbC5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdnLXNjcm9sbGluZy1jYXJvdXNlbCcpLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGUuY2xvc2VzdCgnLnNBVFNIZScpPy5yZW1vdmUoKVxuICAgICAgICBlLmNsb3Nlc3QoJy5VTFN4eWYnKT8ucmVtb3ZlKClcbiAgICB9KVxuICAgIC8vIFJlbW92ZSBhbnkgcmVzdWx0cyB0aGF0IGFyZSBkaXNwbGF5ZWQgYXMgYSBzY3JvbGxpbmcgY2Fyb3VzZWwuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZy1zZWN0aW9uLXdpdGgtaGVhZGVyJykuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5yZW1vdmUoKVxuICAgIH0pXG59XG5cbi8vIFByaW9yaXRpemUgdGhlIHNlYXJjaCByZXN1bHQgbGlzdGluZ3MgZHVyaW5nIHRhYiBjb21wbGV0aW9uLlxuZnVuY3Rpb24gcHJpb3JpdGl6ZVJlc3VsdHMoKSB7XG4gICAgLy8gSXRlcmF0aXZlbHkgZWxldmF0ZSB0aGUgcHJpb3JpdHkgb2YgZWFjaCBzZWFyY2ggcmVzdWx0LlxuICAgIGNvbnN0IHJlc3VsdHM6IE5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSA+IGgzJylcbiAgICByZXN1bHRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnRhYkluZGV4ID0gMVxuICAgIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWNjZXNzaWJpbGl0eVBvcHVwKClcbiAgICByZW1vdmVPdGhlckVsZW1lbnRzKClcbiAgICAvLyBwcmlvcml0aXplUmVzdWx0cygpXG4gICAgLy8gRm9jdXMgdGhlIGZpcnN0IHNlYXJjaCByZXN1bHQsIHNpbmNlIHRoZSBwYWdlIGhhcyBhbHJlYWR5IGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgc3R5bGl6ZVJlc3VsdHMoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EgPiBoMycpPy5wYXJlbnRFbGVtZW50LmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiB0cnVlfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHtcbiAgICBsZXQgZmlyc3RSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhID4gaDMnKS5wYXJlbnRFbGVtZW50XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpIHtcbiAgICAgICAgYWxlcnQoJ3llcycpXG4gICAgfVxufSlcbiJdfQ==