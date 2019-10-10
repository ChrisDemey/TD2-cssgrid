// nav


// first version (function)
// function tabClick(className) {
//     let tab = document.querySelector(className);

//     if (tab.style.display === "block") {
//         tab.style.display = "none";
//     } 
//     else{
//         tab.style.display = "block";
//     }
// }


// second version (function with elements)
// const buttons = document.getElementsByClassName('navBtn');
// const tabs = document.getElementsByClassName(' ');

// function tabClick() {
//     for (const element of buttons) {
//         element.addEventListener('click', event => {
//             for (const element of buttons) {
//                 element.classList.remove('active')
//                 element.setAttribute("aria-selected", "false")
//             }
//             event.target.classList.add('active')
//             event.target.setAttribute("aria-selected", "true")
//         })
//     }
// }


// third version (addEventListener)
// Afficher tableaux en cliquant sur les boutons
let buttonBrand = document.querySelector('.marques').addEventListener("click", () => {
    let panelBrand = document.querySelector('.brandlist').style.display = "block";
    let panelExo = document.querySelector('.exolist').style.display = "none";
    let panelGear = document.querySelector('.gearlist').style.display = "none";
})
let buttonExo = document.querySelector('.exo').addEventListener("click", () => {
    let panelBrand = document.querySelector('.brandlist').style.display = "none";
    let panelExo = document.querySelector('.exolist').style.display = "block";
    let panelGear = document.querySelector('.gearlist').style.display = "none";
})
let buttonGear = document.querySelector('.gear').addEventListener("click", () => {
    let panelBrand = document.querySelector('.brandlist').style.display = "none";
    let panelExo = document.querySelector('.exolist').style.display = "none";
    let panelGear = document.querySelector('.gearlist').style.display = "block";
})

// Afficher un item en cliquant sur le nom
function panelClick(className) {
    let tab = document.querySelector(className);
    let panels = document.querySelectorAll('.tabs');
    if (tab.style.display === "block") {
        tab.style.display = "none";
    }
    else{
        tab.style.display = "block";
    }
}

// Fermer item en cliquant sur la croix (close)
let tab = document.querySelector('.itemTab');
let closeBtn = document.querySelector('.close');
closeBtn.addEventListener( 'click', function() {
    tab.style.display = "none";
});