let $ = document;
let subMenu =$.querySelectorAll(".pages-sub");
let Menu = $.querySelectorAll(".pages");
let dashBoard =$.getElementsByClassName("dashboard")

function deactivateSubMenus(){
    subMenu.forEach(sub=>{
        sub.classList.remove("active");
    })
}
dashBoard[0].addEventListener("click",function(){
    deactivateSubMenus();
   dashBoard[0].nextElementSibling.classList.toggle("active")
   if(dashBoard[0].nextElementSibling.classList.contains("active")){
    dashBoard[0].children[1].innerHTML="&#11165;"
}
else{
    dashBoard[0].children[1].innerHTML="&#11167;"
}
    
})

Menu.forEach(element => {
    
    element.addEventListener("click",function(){
        deactivateSubMenus();
        element.nextElementSibling.classList.toggle("active")
        if(element.nextElementSibling.classList.contains("active")){
            element.children[1].innerHTML="&#11165;"
        }
        else{
            element.children[1].innerHTML="&#11167;"
        }
    })
});
