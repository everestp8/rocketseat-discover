function toggleMode() {
    const isLight = document.documentElement.classList.toggle('light');
    const img = document.querySelector('#profile>img');

    if (isLight) {
        img.setAttribute('src', './images/avatar-light.png');
    } else {
        img.setAttribute('src', './images/avatar.png');
    }
}

document.querySelector('#switch')
    .addEventListener('click', _ => toggleMode());
