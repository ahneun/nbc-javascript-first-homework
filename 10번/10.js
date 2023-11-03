function checkNumber(input) {
    console.log(typeof(input) === 'number'?input*2:`숫자가 아닙니다. (${typeof(input)})`)
}

checkNumber('똥')
checkNumber(10)
checkNumber(20)
checkNumber('20')