function buttonClick(e) {
    console.log(e);
    var element = document.getElementById(e.target.id);
    if(element.classList.contains("selected")){
        element.className = "";
    }else{
        element.className = "selected";
    }
}