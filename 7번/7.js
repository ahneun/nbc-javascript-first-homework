const timerid = document.querySelector(".h1");

let count = 1;
let timerid1;
timerid1 = setInterval(function(){
    document.querySelector("h1").textContent = count++;
    if(count > 10) {
        clearInterval(timerid1)
    }
}, 1000);