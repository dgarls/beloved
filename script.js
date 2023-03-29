panels = document.getElementsByClassName('panel');
menu = document.getElementById("menu");
menuIcon = document.getElementById("menuIcon");
currentPanel = 0;
len = panels.length - 1;
menuOpen = true;

const bringArrowDown = element => {
    if (currentPanel === 0 && element.id === 'upArrow') return;
    element.style.transform = "scale(2) translateY(5vh)";
}

const bringArrowUp = element => {
    if (currentPanel === len && element.id === 'downArrow') return;
    element.style.transform = "scale(2) translateY(-5vh)";
}

const moveDown = () => {
    currentPanel += 1;
    if (currentPanel >= len) {
        currentPanel = len;
        bringArrowDown(document.getElementById('downArrow'));
    }
    window.scrollTo(0, panels[currentPanel].offsetTop);
}

const moveUp = () => {
    currentPanel -= 1;
    if (currentPanel <= 0) {
        currentPanel = 0;
        bringArrowUp(document.getElementById('upArrow'));
    }
    window.scrollTo(0, panels[currentPanel].offsetTop);
}

const goHome = () => {
    window.scrollTo(0, 0);
    currentPanel = 0;
}

const toggleMenu = () => {
    if (menuOpen) {
        // menuIcon.style.left = "4vw";
        menu.style.left = "-15%";
        menuOpen = false;
    }else{
        // menuIcon.style.left = "24vw";
        menuOpen = true;
        menu.style.left = "0";
    }
}

window.onload = function(){ 
    window.scrollTo(0, 0);
}
