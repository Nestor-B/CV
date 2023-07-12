let Host = location.href

let links = {
    "whatsapp": "https://api.whatsapp.com/send?text="+Host,
    "facebook": "https://www.facebook.com/sharer.php?u="+Host,
    "twitter" : "http://twitter.com/share?text=Mi%20portafolio&url="+Host
}

window.addEventListener('load', () => {
    let linkShared = document.querySelectorAll("a[data-shared]")
    linkShared.forEach((item) => {
        if( links[ item.getAttribute('name') ] ) item.setAttribute("href", links[ item.getAttribute('name') ])
    })
})
