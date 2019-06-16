// navs (marques, exo, gearsets)
function brandClick() {
    let brandtab = document.querySelector(".brandlist");
    if (brandtab.style.display === "block") {
        brandtab.style.display = "none";
    } 
    else{
        brandtab.style.display = "block";
    }

    let exotab = document.querySelector(".exolist");
    if (exotab.style.display === "block") {
        exotab.style.display = "none";
    }

    let geartab = document.querySelector(".gearlist");
    if (geartab.style.display === "block") {
        geartab.style.display = "none";
    }
}

function exoClick() {
    let exotab = document.querySelector(".exolist");
    if (exotab.style.display === "block") {
        exotab.style.display = "none";
    }
    else {
        exotab.style.display = "block";
    }

    let brandtab = document.querySelector(".brandlist");
    if (brandtab.style.display === "block") {
        brandtab.style.display = "none";
    } 

    let geartab = document.querySelector(".gearlist");
    if (geartab.style.display === "block") {
        geartab.style.display = "none";
    }
}

function gearClick() {
    let geartab = document.querySelector(".gearlist");
    if (geartab.style.display === "block") {
        geartab.style.display = "none";
    }
    else {
        geartab.style.display = "block";
    }

    let brandtab = document.querySelector(".brandlist");
    if (brandtab.style.display === "block") {
        brandtab.style.display = "none";
    } 

    let exotab = document.querySelector(".exolist");
    if (exotab.style.display === "block") {
        exotab.style.display = "none";
    }
}

// tableaux marques