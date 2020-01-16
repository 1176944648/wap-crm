function rem(){
    const docE = document.documentElement;
    docE.style.fontSize = (docE.clientWidth / 7.5) + "px"
}

addEventListener("load",rem)
addEventListener("resize",rem)