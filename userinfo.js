let fname = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let time = sessionStorage.getItem("time")
 let score = sessionStorage.getItem("score");



document.querySelector(".name").innerHTML = fname;
document.querySelector(".points").innerHTML = `${points}.00%` ;
document.querySelector(".time").innerHTML = time;
document.querySelector(".socre").innerHTML = score;
