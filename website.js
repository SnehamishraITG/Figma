function mode(){
    let model=document.querySelector(".container");
    let unique=document.querySelector(".header-outer")
     model.classList.toggle("active");
     unique.classList.toggle("unique");

}
 
let popup = document.getElementById("popup");

let value = setInterval(()=>{
        popup.style.display="block";      
          },2000);

function popup_fun(){
    popup.style.display="none"
     clearInterval(value);
}

