function hello(){
    alert("no project done yet");

}
let button = document.querySelector("#btn")
let image = document.querySelector("#photo")
let flag = 0
button.addEventListener("click",function(){
    if(flag == 0){
        image.style.width = "60%"
        image.style.border = "3px solid black"
        flag = 1
    }else{
        image.style.width = "0"
        image.style.border = "0px"
        flag = 0
    }
})

