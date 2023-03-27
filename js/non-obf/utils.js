/* Utils */
/* Viewport */
function isInViewport(element) {
    const rect = element.getBoundingClientRect()

    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    )
}

function isInViewportX(element) {
    const rect = element.getBoundingClientRect()

    return (
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    )
}

function isInViewportY(element) {
    const rect = element.getBoundingClientRect()

    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    )
}

/* String */
function truncateString(str, count) {
    if (str.length > count) {
      return str.slice(0, count) + ".."
    } else {
      return str
    }
}

/* Json */
function loadJSON(path) {   
    var request = new XMLHttpRequest()
    request.overrideMimeType("application/json")
    request.open('GET', path, false)
    request.send(null)
    var json = JSON.parse(request.responseText)
    return json
}