const target = document.querySelectorAll('.number')

console.log(target)
for(i=0; target.length > i; i++) {
    target[i].innerHTML = String(Number(target[i].innerHTML) + 10)
}