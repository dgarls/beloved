panels = document.getElementsByClassName('panel')

currentPanel = panels[0]

const bringArrowDown = element => {
    if (currentPanel === 0 && element.id === 'uparrow') return;
    element.style.transform = "translateY(4vh)";
}

const bringArrowUp = element => {
    if (currentPanel === panels.slice(-1) && element.id === 'downarrow') return;
    element.style.transform = "translateY(-4vh)";
}

const moveDown = () => {
    if ( currentPanel != panels.slice(-1) ){
        window.scrollTo()
    }
}

const moveUp = () => {
    if (currentPanel != panels[0]){

    }
}