function openCloseMenu() {
    document.getElementById('burgerMenu').classList.toggle('open')
    document.getElementById('menuContainer').classList.toggle('right-0')
}

function openCloseComp() {
    document.getElementById('compContainer').classList.toggle('hidden')
    document.getElementById('compMenu').querySelector('img').classList.toggle('rotate-[270deg]')
}

document.getElementById('burgerMenu').addEventListener('click', openCloseMenu)
document.getElementById('compMenu').addEventListener('click', openCloseComp)

