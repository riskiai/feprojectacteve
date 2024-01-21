var tabButtons=document.querySelectorAll(".table-container .table-nav-container .nav-tabs button");
var tabPanels=document.querySelectorAll(".table-container  .table");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
   
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="";
    tabButtons[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#cdcdcd');

