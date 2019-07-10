// nav
function tabClick(className) {
    let tab = document.querySelector(className);
    if (tab.style.display === "block") {
        tab.style.display = "none";
    } 
    else{
        tab.style.display = "block";
    }
}
