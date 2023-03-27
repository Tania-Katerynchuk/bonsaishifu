/* Const */
const storeTitle = document.getElementById('store-title')
const storeGrid = document.getElementById('store-grid')
const bucketButton = document.getElementById('bucket-button')
const bucketFade = document.getElementById('bucket-fade')
const bucket = document.getElementById('bucket')

/* Var */
var storeTitleWasInViewport = true
var storeGridWasInViewport = true
var isBucketOpened = false

/* Event listener */
window.addEventListener('scroll', function () {
    animateStoreOnScroll()
    stickyBucket()
})

window.addEventListener('resize', function () {
    animateStoreOnScroll()
    stickyBucket()
})

store.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateToLeft") {
        bucket.style.visibility = "hidden"
        bucket.style.animation = "opacityHide 0.5s forwards"

        bucketFade.style.visibility = "hidden"
        bucketFade.style.animation = "opacityHide 0.5s forwards"

        bucketButton.style.visibility = "hidden"
    }

    if (anim.animationName == "translateToRight") {
        bucket.style.visibility = "hidden"
        bucket.style.animation = "opacityHide 0.5s forwards"

        bucketFade.style.visibility = "hidden"
        bucketFade.style.animation = "opacityHide 0.5s forwards"

        bucketButton.style.visibility = "hidden"
    }
})

store.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityShow") {
            storeTitle.classList.add('underline-custom')
            
            if (bucketButton.style.visibility == "hidden") {
                bucketButton.style.visibility = "visible"
                bucketButton.style.animation = "opacityShow 0.5s forwards"
            }
        }

        if (anim.animationName == "translateFromLeft") {
            storeTitle.classList.add('underline-custom')

            if (isBucketOpened) {
                bucket.style.visibility = "visible"
                bucket.style.animation = "opacityShow 0.5s forwards"

                bucketFade.style.visibility = "visible"
                bucketFade.style.animation = "opacityShow 0.5s forwards"
            }

            bucketButton.style.visibility = "visible"
            bucketButton.style.animation = "opacityShow 0.5s forwards"
        }

        if (anim.animationName == "translateFromRight") {
            storeTitle.classList.add('underline-custom')

            if (isBucketOpened) {
                bucket.style.visibility = "visible"
                bucket.style.animation = "opacityShow 0.5s forwards"

                bucketFade.style.visibility = "visible"
                bucketFade.style.animation = "opacityShow 0.5s forwards"
            }

            bucketButton.style.visibility = "visible"
            bucketButton.style.animation = "opacityShow 0.5s forwards"
        }

        if (anim.animationName == "translateToLeft") {
            storeTitle.classList.remove('underline-custom')
        }

        if (anim.animationName == "translateToRight") {
            storeTitle.classList.remove('underline-custom')
        }
    }
})

storeTitle.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromRight") {
        storeTitleWasInViewport = true
    }
})

storeTitle.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromRight") {
            storeTitle.style.animation = ""
            storeTitle.classList.add('underline-custom')
        }
    }
})

storeGrid.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromLeft") {
        storeGridWasInViewport = true
    }
})

storeGrid.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromLeft") {
            storeGrid.style.animation = ""
            storeGrid.classList.add('underline-custom')
        }
    }
})

bucket.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityHide") {
            bucket.style.visibility = "hidden"
            bucket.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            bucket.style.animation = ""
        }
    }
})

bucketFade.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityHide") {
            bucketFade.style.visibility = "hidden"
            bucketFade.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            bucketFade.style.animation = ""
        }
    }
})

bucketButton.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityShow") {
            bucketButton.style.animation = ""
        }

        if (anim.animationName == "increaseDecreaseScale50") {
            bucketButton.style.animation = ""
        }

        if (anim.animationName == "decreaseIncreaseScale50") {
            bucketButton.style.animation = ""
        }
    }
})

/* Click */
function clickBucket() {
    if (bucket.style.visibility == "visible") {
        isBucketOpened = false

        removeBucketForm()

        for (let i = 0; i < bucket.childElementCount; i++) {
            bucket.children[i].style.animation = ""
            bucket.children[i].classList.remove("d-none")
        }

        bucket.style.animation = "opacityHide 0.5s forwards"
        bucketFade.style.animation = "opacityHide 0.5s forwards"
    } else {
        stickyBucket()
        emptyBucket()
        totalBucket()

        bucket.style.visibility = "visible"
        bucketFade.style.visibility = "visible"

        bucket.style.animation = "opacityShow 0.5s forwards"
        bucketFade.style.animation = "opacityShow 0.5s forwards"

        isBucketOpened = true
    }
}

function clickStoreItem() {
    let id = this.id.replace(/[^0-9]/g, '')

    showCount(id)
    addToBucket(id)
    disableStoreButton(id)

    bucketButton.style.animation = "decreaseIncreaseScale50 0.5s forwards"
}

function clickBucketItem() {
    let id = this.id.replace(/[^0-9]/g, '')
    
    enableStoreButton(id),
    hideCount(id)
    disableBucketButton(id)
    removeFromBucket(id)
    
    bucketButton.style.animation = "increaseDecreaseScale50 0.5s forwards"
}

function clickPlus() {
    let id = this.id.replace(/[^0-9]/g, '')

    let storeNum = document.getElementById('store-num' + id)
    let bucketNum = document.getElementById('bucket-num' + id)
    let price = document.getElementById('bucket-price' + id)
    let bucketSum = document.getElementById('bucket-sum')

    let sum = parseFloat(price.textContent.replace(/[^\.0-9]/g, '')) / bucketNum.value

    if (storeNum.value < 99) {
        storeNum.value++
        bucketNum.value++

        price.innerText = truncateString("- ₴" + sum * bucketNum.value, 12)

        if (document.getElementById('bucket-sum') !== null) {
            bucketSum.innerText = "Сума: ₴" + (parseFloat(bucketSum.textContent.replace(/[^\.0-9]/g, '')) + sum)
        }
    }
}

function clickMinus() {
    let id = this.id.replace(/[^0-9]/g, '')

    let storeNum = document.getElementById('store-num' + id)
    let bucketNum = document.getElementById('bucket-num' + id)
    let price = document.getElementById('bucket-price' + id)
    let bucketSum = document.getElementById('bucket-sum')

    let sum = parseFloat(price.textContent.replace(/[^\.0-9]/g, '')) / bucketNum.value

    if (storeNum.value > 1) {
        storeNum.value--
        bucketNum.value--

        price.innerText = truncateString("- ₴" + (parseFloat(price.textContent.replace(/[^\.0-9]/g, '')) - sum), 12)

        if (document.getElementById('bucket-sum') !== null) {
            bucketSum.innerText = "Сума: ₴" + (parseFloat(bucketSum.textContent.replace(/[^\.0-9]/g, '')) - sum)
        }
    }
}

function clickBucketForm() {
    if (bucket.childElementCount >= 2) {
        for (let i = 0; i < bucket.childElementCount; i++) {
            bucket.children[i].style.animation = "opacityHide 0.25s forwards"
        }

        // Event listener
        bucket.children[bucket.childElementCount - 1].addEventListener("animationend", function(anim) {
            if (anim.target === this) {
                if (anim.animationName == "opacityHide") {
                    if (document.getElementById("bucket-order-form") == null && document.getElementById("bucket-empty") == null) {
                        for (let i = 0; i < bucket.childElementCount; i++) {
                            bucket.children[i].style.animation = ""
                            bucket.children[i].classList.add("d-none")
                        }
                        createBucketForm()
                    }
                }
            }
        });
    }
}

/* Help functionality */
function animateStoreOnPanelCollapsed() {
    if (!storeTitleWasInViewport) {
        storeTitle.style.animation = "translateFromRight 0.5s forwards"
    }

    if (!storeGridWasInViewport) {
        storeGrid.style.animation = "translateFromLeft 0.5s forwards"
    }

    stickyBucket(150, 300)
}

function animateStoreOnScroll() {
    if (isInViewport(storeTitle)) {
        if (store.style.display == "none") {
            storeTitleWasInViewport = true
            storeTitle.style.animation = ""
        }

        if (!storeTitleWasInViewport) {
            storeTitle.style.animation = "translateFromRight 0.5s forwards"
        }
    } else {
        storeTitle.classList.remove('underline-custom')

        if (isInViewportX(storeTitle)) {
            storeTitleWasInViewport = false
        }
    }

    if (isInViewport(storeGrid)) {
        if (store.style.display == "none") {
            storeGridWasInViewport = true
            storeGrid.style.animation = ""
        }

        if (!storeGridWasInViewport) {
            storeGrid.style.animation = "translateFromLeft 0.5s forwards"
        }
    } else {
        storeGrid.classList.remove('underline-custom')

        if (isInViewportX(storeGrid)) {
            storeGridWasInViewport = false
        }
    }
}

function stickyBucket(durationCollapsed = 0, durationNotCollapsed = 0) {
    for (i = 0; i < bucket.getAnimations().length; i++) {
        if (bucket.getAnimations()[i].playState !== 'finished') {
            return
        }
    }

    if (window.innerWidth >= 992) {
        if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight)) {
            bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: 0, fill: 'forwards'})
            bucketFade.animate({top: ((header.offsetHeight - headerCarousel.offsetHeight) - window.pageYOffset) + "px"}, {duration: 0, fill: 'forwards'})
            bucket.animate({top: (window.innerHeight - bucket.offsetHeight - 30) + "px"}, {duration: 0, fill: 'forwards'})

        } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
            bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: 0, fill: 'forwards'})
            bucketFade.animate({top: 0 + "px"}, {duration: 0, fill: 'forwards'})
            bucket.animate({top: (window.innerHeight - bucket.offsetHeight - 30) + "px"}, {duration: 0, fill: 'forwards'})

        } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
            bucketButton.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - footer.offsetHeight - bucketButton.offsetHeight - 30))  + "px"}, {duration: 0, fill: 'forwards'})
            bucketFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight))  + "px"}, {duration: 0, fill: 'forwards'})
            bucket.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - bucket.offsetHeight - footer.offsetHeight - 30))  + "px"}, {duration: 0, fill: 'forwards'})
        }

    } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        if (panelToggler.classList.contains("collapsed")) {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight)) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucketFade.animate({top: (154 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucket.animate({top: (154 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 0 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucket.animate({top: 0 + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - footer.offsetHeight - bucketButton.offsetHeight - 30)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucket.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
            }
        } else {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucketFade.animate({top: (526 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucket.animate({top: (526 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 428 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucket.animate({top: 428 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - footer.offsetHeight - bucketButton.offsetHeight - 30)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 428 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucket.animate({top: 428 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
            }
        }
    } else if (window.innerWidth <= 767) {
        if (panelToggler.classList.contains("collapsed")) {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight)) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucketFade.animate({top: (145 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucket.animate({top: (145 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 0 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucket.animate({top: 0 + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - footer.offsetHeight - bucketButton.offsetHeight - 30)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                bucket.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
            }
        } else {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucketFade.animate({top: (494.5 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucket.animate({top: (494.5 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: (window.innerHeight - bucketButton.offsetHeight - 30) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 405.5 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucket.animate({top: 405.5 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight) {
                bucketButton.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - footer.offsetHeight - bucketButton.offsetHeight - 30)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucketFade.animate({top: 405.5 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                bucket.animate({top: 405.5 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
            }
        }
    }
}

function totalBucket() {
    if ((bucket.childElementCount !== 1 || document.getElementById('bucket-empty') == null) && bucket.childElementCount >= 1) {
    
        let sum = 0

        for (let i = 0; i < bucket.childElementCount; i++) {
            if (bucket.children[i].id.includes('bucket-item')) {
                let price = document.getElementById('bucket-price' + bucket.children[i].id.replace(/[^0-9]/g, ''))
                if(isNaN(parseFloat(price.textContent.replace(/[^\.0-9]/g, '')))) {
                    bucket.removeChild(bucket.children[i])
                    i--
                } else {
                    sum += parseFloat(price.textContent.replace(/[^\.0-9]/g, ''))
                }
            } else if (bucket.children[i].id == "bucket-order-grid") {
                if (i == bucket.childElementCount - 1 && i !== 0) {
                    let bucketSum = document.getElementById('bucket-sum')
                    bucketSum.innerText = "Сума: ₴" + sum
                } else {
                    bucket.removeChild(document.getElementById('bucket-order-grid'))
                    i--
                }
            }
        }

        if (bucket.childElementCount == 0) {
            emptyBucket()
        } else if (document.getElementById('bucket-order-grid') == null) {
            let grid = document.createElement("div")
            grid.setAttribute("id", "bucket-order-grid")

            grid.classList.add("bucket-order-grid-custom")

            let p = document.createElement("p")
            p.setAttribute("id", "bucket-sum")
            p.classList.add("bucket-sum-custom")
            p.innerText = "Сума: ₴" + sum

            let btn = document.createElement("button")
            btn.classList.add("btn")
            btn.classList.add("btn-success")
            btn.classList.add("bucket-confirm-order-custom")
            btn.innerText = "Оформити замовлення"

            btn.onclick = clickBucketForm

            bucket.appendChild(grid)

            grid.appendChild(p)
            grid.appendChild(btn)
        }
    }
}

function emptyBucket() {
    if (bucket.childElementCount == 0 || (bucket.childElementCount == 1 && document.getElementById('bucket-order-grid') !== null)) {
        let empty = document.createElement("p")
        empty.setAttribute("id", "bucket-empty")
        empty.classList.add("bucket-empty-custom")
        empty.innerText = "Порожньо"

        bucket.appendChild(empty)

        empty.style.animation = "opacityShow 0.5s forwards"

    } else if (bucket.childElementCount > 1 && document.getElementById('bucket-empty') !== null) {
        let empty = document.getElementById('bucket-empty')
        bucket.removeChild(empty)
    }
}

function addToBucket(id) {
    let item = document.createElement("div")
    item.setAttribute("id", "bucket-item" + id)
    item.classList.add("bucket-item-custom")

    let img = document.createElement("img")
    img.classList.add("bucket-img-custom")
    img.src = document.getElementById('store-img' + id).src

    let labelGrid = document.createElement("div")
    labelGrid.classList.add("bucket-label-grid-custom")

    let name = document.createElement("p")
    name.setAttribute("id", "bucket-name" + id)
    name.classList.add("bucket-name-custom")
    name.innerText = truncateString(document.getElementById('store-name' + id).innerText, 24)

    let desc = document.createElement("p")
    desc.classList.add("bucket-desc-custom")
    desc.innerText = truncateString(document.getElementById('store-desc' + id).innerText, 128)

    let controlGrid = document.createElement("div")
    controlGrid.classList.add("bucket-control-grid-custom")

    let price = document.createElement("button")
    price.setAttribute("id", "bucket-price" + id)
    price.classList.add("btn")
    price.classList.add("btn-danger")
    price.classList.add("bucket-price-custom")
    price.type = "button"
    price.innerText = truncateString("- " + document.getElementById('store-price' + id).textContent, 12)

    price.onclick = clickBucketItem

    let count = document.createElement("div")
    count.classList.add("bucket-count-custom")

    let minus = document.createElement("button")
    minus.setAttribute("id", "bucket-minus" + id)
    minus.classList.add("bucket-minus-custom")
    minus.type = "button"
    minus.innerText = "-"

    minus.onclick = clickMinus

    let num = document.createElement("input")
    num.setAttribute("id", "bucket-num" + id)
    num.classList.add("bucket-num-custom")
    num.type = "number"
    num.value = document.getElementById('store-num' + id).value

    // Event listener
    num.addEventListener("keypress", (event) => {
        event.preventDefault()
    })

    let plus = document.createElement("button")
    plus.setAttribute("id", "bucket-plus" + id)
    plus.classList.add("bucket-plus-custom")
    plus.type = "button"
    plus.innerText = "+"

    plus.onclick = clickPlus

    bucket.appendChild(item)

    item.appendChild(img)
    item.appendChild(labelGrid)
    item.appendChild(controlGrid)

    labelGrid.appendChild(name)
    labelGrid.appendChild(desc)

    controlGrid.appendChild(price)
    controlGrid.appendChild(count)

    count.appendChild(minus)
    count.appendChild(num)
    count.appendChild(plus)
}

function showCount(id) {
    let count = document.getElementById('store-count' + id)
    count.style.visibility = "visible"
    count.style.animation = "opacityShow 0.5s forwards"
}

function hideCount(id) {
    let count = document.getElementById('store-count' + id)
    count.style.animation = "opacityHide 0.5s forwards"

    let num = document.getElementById('store-num' + id)
    num.value = 1

    // Event listener
    count.addEventListener("animationend", function(anim) {
        if (anim.target === this) {
            if (anim.animationName == "opacityHide") {
                count.style.visibility = "hidden"
                count.style.animation = ""
            }
        }
    })
}

function disableStoreButton(id) {
    let btn = document.getElementById('store-price' + id)
    btn.disabled = true
    btn.innerText = ""

    let icon = document.createElement("i")
    icon.setAttribute("id", "store-fa" + id)
    icon.classList.add("fa-regular")
    icon.classList.add("fa-circle-check")
    
    btn.appendChild(icon)

    icon.style.animation = "opacityShow 0.5s forwards"
}

function enableStoreButton(id) {
    let bucketPrice = document.getElementById('bucket-price' + id)
    let storePrice = document.getElementById('store-price' + id)
    let num = document.getElementById('bucket-num' + id)

    storePrice.disabled = false
    storePrice.innerText = truncateString("₴" + (bucketPrice.textContent.replace(/[^\.0-9]/g, '') / num.value), 12)
}

function disableBucketButton(id) {
    let btn = document.getElementById('bucket-price' + id)
    btn.disabled = true
    btn.innerText = ""

    let icon = document.createElement("i")
    icon.setAttribute("id", "bucket-fa" + id)
    icon.classList.add("fa-regular")
    icon.classList.add("fa-circle-check")
    
    btn.appendChild(icon)

    icon.style.animation = "opacityShow 0.5s forwards"
}

function removeFromBucket(id) {
    let item = document.getElementById('bucket-item' + id)
    let icon = document.getElementById('bucket-fa' + id)
    let grid = document.getElementById('bucket-order-grid')

    // Event listener
    icon.addEventListener("animationend", function(anim) {
        if (anim.target === this) {
            if (anim.animationName == "opacityShow") {
                item.style.animation = "opacityHide 0.25s forwards"

                if (bucket.childElementCount == 2) {
                    grid.style.animation = "opacityHide 0.25s forwards"
                }

                icon.style.animation = ""
            }
        }
    })

    item.addEventListener("animationend", function(anim) {
        if (anim.target === this) {
            if (anim.animationName == "opacityHide") {
                let underItemToRemove = false

                for (let i = 0; i < bucket.childElementCount; i++) {
                    if (underItemToRemove) {
                        bucket.children[i].style.animation = "translateToTop 0.25s forwards"
                    }

                    if (bucket.children[i].id == item.id) {
                        underItemToRemove = true
                    }

                    if (bucket.children[i].id == item.id && bucket.childElementCount == 2) {
                        let price = document.getElementById('store-price' + item.id.replace(/[^0-9]/g, ''))
                        let num = document.getElementById('bucket-num' + item.id.replace(/[^0-9]/g, ''))
                        let bucketSum = document.getElementById('bucket-sum')

                        let sum = parseFloat(bucketSum.textContent.replace(/[^\.0-9]/g, '')) - parseFloat(price.textContent.replace(/[^\.0-9]/g, '')) * num.value
                        bucketSum.innerText = "Сума: ₴" + sum

                        bucket.removeChild(item)
                        bucket.removeChild(grid)
                        emptyBucket()
                    }
                }
            }
        }
    })

    bucket.children[bucket.childElementCount - 1].addEventListener("animationend", function(anim) {
        if (anim.target === this) {
            if (anim.animationName == "translateToTop") {
                for (let i = 0; i < bucket.childElementCount; i++) {
                    bucket.children[i].style.animation = ""

                    if (bucket.children[i].id == item.id) {
                        let price = document.getElementById('store-price' + item.id.replace(/[^0-9]/g, ''))
                        let num = document.getElementById('bucket-num' + item.id.replace(/[^0-9]/g, ''))
                        let bucketSum = document.getElementById('bucket-sum')

                        let sum = parseFloat(bucketSum.textContent.replace(/[^\.0-9]/g, '')) - parseFloat(price.textContent.replace(/[^\.0-9]/g, '')) * num.value
                        bucketSum.innerText = "Сума: ₴" + sum

                        bucket.removeChild(item)
                        i--

                        if (bucket.childElementCount == 1 && document.getElementById('bucket-order-grid') !== null) {
                            bucket.removeChild(document.getElementById('bucket-order-grid'))
                            emptyBucket()
                        }
                    }
                }
            }
        }
    })
}

function createBucketForm() {
    let order = ""

    for (let i = 0; i < bucket.childElementCount - 1; i++) {
        let name = document.getElementById("bucket-name" + bucket.children[i].id.replace(/[^0-9]/g, ''))
        let num = document.getElementById("bucket-num" + bucket.children[i].id.replace(/[^0-9]/g, ''))
        order += name.innerText + " x " + num.value + "; "
    }

    let form = document.createElement('form')
    form.setAttribute("id", "bucket-order-form")
    form.setAttribute("method", "POST")
    form.setAttribute("action", "https://formsubmit.co/83e950886d31d0b157c35e5bfe488f11")
    form.classList.add("bucket-form-custom")

    let subjectInput = document.createElement('input')
    subjectInput.setAttribute("type", "hidden")
    subjectInput.setAttribute("name", "_subject")
    subjectInput.value = "BONSAI SHIFU - Нове замовлення"

    let captchaInput = document.createElement('input')
    captchaInput.setAttribute("type", "hidden")
    captchaInput.setAttribute("name", "_captcha")
    captchaInput.value = false

    let nextInput = document.createElement('input')
    nextInput.setAttribute("type", "hidden")
    nextInput.setAttribute("name", "_next")
    nextInput.value = window.location.href + "redirect"

    let orderInput = document.createElement('input')
    orderInput.setAttribute("type", "hidden")
    orderInput.setAttribute("name", "Замовлення")
    orderInput.value = order

    let nameLabel = document.createElement('label')
    nameLabel.innerText = "Введіть ПІБ (повністю):"

    let nameInput = document.createElement('input')
    nameInput.setAttribute("required", "")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "ПІБ")
    nameInput.setAttribute("placeholder", "ПІБ")
    nameInput.setAttribute("minlength", "2")
    nameInput.setAttribute("maxlength", "64")
    nameInput.classList.add("bucket-input-custom")

    let emailLabel = document.createElement('label')
    emailLabel.innerText = "Введіть ел. пошту:"

    let emailInput = document.createElement('input')
    emailInput.setAttribute("required", "")
    emailInput.setAttribute("type", "email")
    emailInput.setAttribute("name", "Ел. пошта")
    emailInput.setAttribute("placeholder", "Ел. пошта")
    emailInput.setAttribute("minlength", "4")
    emailInput.setAttribute("maxlength", "128")
    emailInput.classList.add("bucket-input-custom")

    let telLabel = document.createElement('label')
    telLabel.innerText = "Введіть номер телефону:"
    
    let telInput = document.createElement('input')
    telInput.setAttribute("required", "")
    telInput.setAttribute("type", "tel")
    telInput.setAttribute("name", "Номер телефону")
    telInput.setAttribute("placeholder", "Номер телефону")
    telInput.setAttribute("minlength", "13")
    telInput.setAttribute("maxlength", "13")
    telInput.setAttribute("pattern", "^\\+\\d+")
    telInput.setAttribute("title", "+380971307474")
    telInput.classList.add("bucket-input-custom")

    let delLabel = document.createElement('label')
    delLabel.innerText = "Введіть спосіб доставки і адресу (Нова пошта/Укр. пошта):"
    
    let delInput = document.createElement('input')
    delInput.setAttribute("required", "")
    delInput.setAttribute("type", "text")
    delInput.setAttribute("name", "Спосіб доставки")
    delInput.setAttribute("placeholder", "Пр.: \"м. Рівне, Нова Пошта №1\"")
    delInput.setAttribute("minlength", "16")
    delInput.setAttribute("maxlength", "128")
    delInput.classList.add("bucket-input-custom")

    let label = document.createElement('label')
    label.innerText = "Введіть додаткову інформацію (якщо це потрібно):"
                        
    let textarea = document.createElement('textarea')
    textarea.setAttribute("type", "text")
    textarea.setAttribute("name", "Додаткова інформація")
    textarea.setAttribute("placeholder", "Додаткова інформація")
    textarea.setAttribute("maxlength", "256")
    textarea.classList.add("bucket-textarea-custom")

    let button = document.createElement('button')
    button.setAttribute("type", "submit")
    button.classList.add("btn")
    button.classList.add("btn-success")
    button.classList.add("bucket-order-custom")

    button.innerText = "Замовити"

    bucket.appendChild(form)

    form.appendChild(subjectInput)
    form.appendChild(captchaInput)
    form.appendChild(nextInput)
    form.appendChild(orderInput)

    form.appendChild(nameLabel)
    form.appendChild(nameInput)

    form.appendChild(emailLabel)
    form.appendChild(emailInput)

    form.appendChild(telLabel)
    form.appendChild(telInput)

    form.appendChild(delLabel)
    form.appendChild(delInput)

    form.appendChild(label)
    form.appendChild(textarea)

    form.appendChild(button)

    form.style.animation = "opacityShow 0.25s forwards"
}

function removeBucketForm() {
    if (document.getElementById("bucket-order-form") !== null) {
        bucket.removeChild(document.getElementById("bucket-order-form"))
    }
}

/* Flow */
async function loadStoreGrid() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    for (let i = 0; i < data.store.length; i++) {
        let card = document.createElement("div")
        card.setAttribute("id", "store-item" + i)
        card.classList.add("card")
        card.classList.add("store-item-custom")

        let img = document.createElement("img")
        img.setAttribute("id", "store-img" + i)
        img.classList.add("card-img-top")
        img.src = data.store[i].image

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let h5 = document.createElement("h5")
        h5.setAttribute("id", "store-name" + i)
        h5.classList.add("card-title")
        h5.innerText = data.store[i].name

        let desc = document.createElement("p")
        desc.setAttribute("id", "store-desc" + i)
        desc.classList.add("card-text")
        desc.innerText = data.store[i].description

        let controlGrid = document.createElement("div")
        controlGrid.classList.add("store-control-grid-custom")

        let btn = document.createElement("button")
        btn.setAttribute("id", "store-price" + i)
        btn.classList.add("btn")
        btn.classList.add("btn-success")
        btn.classList.add("store-price-custom")
        btn.disabled = !data.store[i].stock
        btn.innerText = "₴" + data.store[i].price

        btn.onclick = clickStoreItem

        let count = document.createElement("div")
        count.setAttribute("id", "store-count" + i)
        count.classList.add("store-count-custom")
    
        let minus = document.createElement("button")
        minus.setAttribute("id", "store-minus" + i)
        minus.classList.add("store-minus-custom")
        minus.type = "button"
        minus.innerText = "-"

        minus.onclick = clickMinus
    
        let num = document.createElement("input")
        num.setAttribute("id", "store-num" + i)
        num.classList.add("store-num-custom")
        num.type = "number"
        num.value = 1

        // Event listener
        num.addEventListener("keypress", (event) => {
            event.preventDefault()
        })

        let plus = document.createElement("button")
        plus.setAttribute("id", "store-plus" + i)
        plus.classList.add("store-plus-custom")
        plus.type = "button"
        plus.innerText = "+"

        plus.onclick = clickPlus

        let cardFooter = document.createElement("div")
        cardFooter.classList.add("card-footer")

        let small = document.createElement("small")
        small.setAttribute("id", "store-stock" + i)
        small.classList.add("text-muted")
        small.innerText = data.store[i].stock ? "У наявності" : "Немає у наявності"

        storeGrid.appendChild(card)

        card.appendChild(img)
        card.appendChild(cardBody)
        card.appendChild(controlGrid)
        card.appendChild(cardFooter)

        cardBody.appendChild(h5)
        cardBody.appendChild(desc)

        controlGrid.appendChild(btn)
        controlGrid.appendChild(count)
    
        count.appendChild(minus)
        count.appendChild(num)
        count.appendChild(plus)

        cardFooter.appendChild(small)
    }
}

function startupStoreAnim() {
    if (storeTitleWasInViewport && store.style.display == "block") {
        storeTitle.classList.add('underline-custom')
    }
}

function main() {
    loadStoreGrid()
    startupStoreAnim()
}

main()