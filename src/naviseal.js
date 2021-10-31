/*
Not yet checked for presence on page:
www.google.com##.dRYYxd
www.google.com##.pHiOh
www.google.com##.wYq63b
www.google.com##*[id^=eob_]
www.google.com##a.gb_D
www.google.com##a.gyPpGe

Not yet found on page:
- www.google.com##div.hpuQDe
- www.google.com##div.P1usbc
- www.google.com##span.lBbTb
 */
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
            element.nextElementSibling.remove();
            continue;
        }
        element = element.nextElementSibling;
    }
    document.querySelector('body > h1').remove();
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
    // Remove the search bar's magnifying glass
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
        // if (element.getElementsByTagName('g-right-button').length > 0) {
        //     element.remove()
        // }
    });
    // Remove the "Feedback" requests.
    document.querySelectorAll('a.oBa0Fe').forEach((element) => {
        element.remove();
    });
}
// Prioritize the search result listings during tab completion
function prioritizeResults() {
    // Iteratively elevate the priority of each search result.
    const results = document.querySelectorAll('a > h3');
    results.forEach((element) => {
        element.parentElement.tabIndex = 1;
    });
}
/*
document.addEventListener('keydown', () => {
    removeAccessibilityPopup()
    removeOtherElements()
})
*/
document.addEventListener('DOMContentLoaded', () => {
    removeAccessibilityPopup();
    removeOtherElements();
    // prioritizeResults()
    // Focus the first search result, since the page has already finished loading.
    document.querySelector('a > h3').parentElement.focus({ preventScroll: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aXNlYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpc2VhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBRUgsK0NBQStDO0FBQy9DLFNBQVMsd0JBQXdCO0lBQzdCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUE7SUFDN0MsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtRQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxPQUFPLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUMxQixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssWUFBWSxFQUFFO1lBQ2hELE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUE7WUFDcEMsU0FBUTtTQUNYO1FBQ0QsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtZQUM1RCxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO1lBQ3BDLFNBQVE7U0FDWDtRQUNELElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDMUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ25DLFNBQVE7U0FDWDtRQUNELE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUE7S0FDdkM7SUFDRCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzVDLE9BQU07QUFDVixDQUFDO0FBRUQsK0NBQStDO0FBQy9DLFNBQVMsbUJBQW1CO0lBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNyRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ25CO2FBQU0sSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLGtCQUFrQixFQUFFO1lBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ25CO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRiwyQ0FBMkM7SUFDM0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNoRCxrREFBa0Q7SUFDbEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNGLDJDQUEyQztJQUMzQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDeEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFBO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ25CO1FBQ0QsbUVBQW1FO1FBQ25FLHVCQUF1QjtRQUN2QixJQUFJO0lBQ1IsQ0FBQyxDQUFDLENBQUE7SUFDRixrQ0FBa0M7SUFDbEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3RELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCw4REFBOEQ7QUFDOUQsU0FBUyxpQkFBaUI7SUFDdEIsMERBQTBEO0lBQzFELE1BQU0sT0FBTyxHQUFrQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRDs7Ozs7RUFLRTtBQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0Msd0JBQXdCLEVBQUUsQ0FBQTtJQUMxQixtQkFBbUIsRUFBRSxDQUFBO0lBQ3JCLHNCQUFzQjtJQUN0Qiw4RUFBOEU7SUFDOUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUMsYUFBYSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7QUFDL0UsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTm90IHlldCBjaGVja2VkIGZvciBwcmVzZW5jZSBvbiBwYWdlOlxud3d3Lmdvb2dsZS5jb20jIy5kUllZeGRcbnd3dy5nb29nbGUuY29tIyMucEhpT2hcbnd3dy5nb29nbGUuY29tIyMud1lxNjNiXG53d3cuZ29vZ2xlLmNvbSMjKltpZF49ZW9iX11cbnd3dy5nb29nbGUuY29tIyNhLmdiX0Rcbnd3dy5nb29nbGUuY29tIyNhLmd5UHBHZVxuXG5Ob3QgeWV0IGZvdW5kIG9uIHBhZ2U6XG4tIHd3dy5nb29nbGUuY29tIyNkaXYuaHB1UURlXG4tIHd3dy5nb29nbGUuY29tIyNkaXYuUDF1c2JjXG4tIHd3dy5nb29nbGUuY29tIyNzcGFuLmxCYlRiXG4gKi9cblxuLy8gRGVsZXRlIHRoZSBwZXNreSBhY2Nlc3NpYmlsaXR5IHBvcC11cCBtb2RhbC5cbmZ1bmN0aW9uIHJlbW92ZUFjY2Vzc2liaWxpdHlQb3B1cCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICB3aGlsZSAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwiZGl2XCIpIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuICAgIHdoaWxlIChlbGVtZW50LmlkICE9PSBcIm1haW5cIikge1xuICAgICAgICBpZiAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaWQgPT09IFwic2VhcmNoZm9ybVwiKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJkaXZcIikge1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pZCAhPT0gXCJtYWluXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gaDEnKS5yZW1vdmUoKVxuICAgIHJldHVyblxufVxuXG4vLyBEZWxldGUgb3RoZXIgZWxlbWVudHMgb2YgdGhlIHNlYXJjaCByZXN1bHRzLlxuZnVuY3Rpb24gcmVtb3ZlT3RoZXJFbGVtZW50cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWZNaG9jJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudC5zdGFydHNXaXRoKCdQZW9wbGUgYWxzbycpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSBcIlJlbGF0ZWQgc2VhcmNoZXNcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIFJlbW92ZSB0aGUgc2VhcmNoIGJhcidzIG1hZ25pZnlpbmcgZ2xhc3NcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uVGc3TFpkJykucmVtb3ZlKClcbiAgICAvLyBSZW1vdmUgdGhlIFwiLi4uXCIgYWRqYWNlbnQgdG8gZWFjaCBzZWFyY2ggcmVzdWx0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LkI2Zm15ZicpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG4gICAgLy8gUmVtb3ZlIHRoZSBcIkltYWdlcyBmb3IgPHF1ZXJ5PlwiIHNlY3Rpb24uXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LlVMU3h5ZicpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMycpLmZvckVhY2goKGhlYWRpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChoZWFkaW5nLmlubmVyVGV4dC5zdGFydHNXaXRoKFwiSW1hZ2VzIGZvclwiKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZy1yaWdodC1idXR0b24nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIC8vIH1cbiAgICB9KVxuICAgIC8vIFJlbW92ZSB0aGUgXCJGZWVkYmFja1wiIHJlcXVlc3RzLlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Eub0JhMEZlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcbn1cblxuLy8gUHJpb3JpdGl6ZSB0aGUgc2VhcmNoIHJlc3VsdCBsaXN0aW5ncyBkdXJpbmcgdGFiIGNvbXBsZXRpb25cbmZ1bmN0aW9uIHByaW9yaXRpemVSZXN1bHRzKCkge1xuICAgIC8vIEl0ZXJhdGl2ZWx5IGVsZXZhdGUgdGhlIHByaW9yaXR5IG9mIGVhY2ggc2VhcmNoIHJlc3VsdC5cbiAgICBjb25zdCByZXN1bHRzOiBOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EgPiBoMycpXG4gICAgcmVzdWx0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC50YWJJbmRleCA9IDFcbiAgICB9KVxufVxuXG4vKlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcbiAgICByZW1vdmVBY2Nlc3NpYmlsaXR5UG9wdXAoKVxuICAgIHJlbW92ZU90aGVyRWxlbWVudHMoKVxufSlcbiovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWNjZXNzaWJpbGl0eVBvcHVwKClcbiAgICByZW1vdmVPdGhlckVsZW1lbnRzKClcbiAgICAvLyBwcmlvcml0aXplUmVzdWx0cygpXG4gICAgLy8gRm9jdXMgdGhlIGZpcnN0IHNlYXJjaCByZXN1bHQsIHNpbmNlIHRoZSBwYWdlIGhhcyBhbHJlYWR5IGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYSA+IGgzJykucGFyZW50RWxlbWVudC5mb2N1cyh7cHJldmVudFNjcm9sbDogdHJ1ZX0pXG59KVxuIl19