/* Const */
const foregroundTop = document.getElementById("foreground-top")
const foregroundBottom = document.getElementById("foreground-bottom")

// Flow
function animateForeground() {
    foregroundTop.style.animation = "foregroundTop 1s forwards"
    foregroundBottom.style.animation = "foregroundBottom 1s forwards"
}

async function waitForData() {
    await Promise.all([
        loadHeaderCarousel,
        loadNewsGrid,
        loadInfoText,
        loadMiniGallery,
        loadGalleryGrid,
        loadStoreGrid,
        loadContactText,
        loadFooterText,
    ]);

    setTimeout(() => {
        animateForeground()
    }, 1000)
}

function main() {
    waitForData()
}

main()