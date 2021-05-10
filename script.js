let search = document.getElementById('search')
let searchIcon = document.getElementById('searchIcon')

searchIcon.onclick = function () {
    search.classList.toggle('active')
}

let page = document.getElementById('page')
let themeIcon = document.getElementById('themeIcon')
let themeName = document.getElementById('themeName')
let toggle = document.getElementById('toggle')

if (localStorage.getItem('myTheme') == null) {
    localStorage.setItem('myTheme', 'light')
}

let localData = localStorage.getItem('myTheme')

if (localData == 'light') {
    page.classList.remove('dark-theme')
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
    themeName.innerHTML = 'Light'

} else if (localData == 'dark') {
    page.classList.add('dark-theme')
    themeIcon.classList.remove('fa-sun')
    themeIcon.classList.add('fa-moon')
    themeName.innerHTML = 'Dark'
}

toggle.onclick = function () {
    if (themeIcon.classList.contains('fa-sun')){
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
        themeName.innerHTML = 'Dark'
        page.classList.toggle('dark-theme')
        localStorage.setItem('myTheme', 'dark')

    }
    else if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
        themeName.innerHTML = 'Light'
        page.classList.toggle('dark-theme')
        localStorage.setItem('myTheme', 'light')

    }
}