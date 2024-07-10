const getColor=()=>{
    //hex code=color code
    const randomNumber=Math.floor(Math.random()*1677215);
    const randomCode="#" +randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
}
// document.getElementsByClassName(".btn").addEventListener("click",getcolor)
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor()