function setTheme(theme) {
    if (theme == 'light') {
        localStorage.setItem('panelTheme', theme);
        document.documentElement.style.setProperty('--main-bg-color', '#EDAE49');
        document.documentElement.style.setProperty('--second-bg-color', '#3E96A4');
        document.documentElement.style.setProperty('--highlight', '#D1495B');
        document.documentElement.style.setProperty('--highlight-current', '#ffb703');
        document.documentElement.style.setProperty('--font-color', 'black');
        document.documentElement.style.setProperty('--font-color-inv', 'white');
        document.documentElement.style.setProperty('--bg-img', 'url("../assets/pissarra-blur-light.jpg")');
    }
    if (theme == 'dark') {
        localStorage.setItem('panelTheme', theme);
        document.documentElement.style.setProperty('--main-bg-color', '#219ebc');
        document.documentElement.style.setProperty('--second-bg-color', '#023047');
        document.documentElement.style.setProperty('--highlight', '#8ecae6');
        document.documentElement.style.setProperty('--highlight-current', '#ffb703');
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--font-color-inv', 'black');
        document.documentElement.style.setProperty('--bg-img', 'url("../assets/pissarra-blur-dark.jpg")');
    }
}

function toggleTheme() {
    if (localStorage.getItem('panelTheme') == 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');;
    }
}

function loadTheme() {
    //Add this to body onload, gets the current theme. If panelTheme is empty, defaults to blue.
    if (localStorage.getItem('panelTheme') == '') {
        setTheme('light');
    } else {
        setTheme(localStorage.getItem('panelTheme'));
    }
}