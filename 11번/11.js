function checkTime() {
    let now = new Date()
    console.log(now)

    // let year = now.getFullYear()
    // let month = now.getMonth() + 1
    // let date = now.getDate()
    // let day = now.getDay()
    // let hour = now.getHours()
    // let minute = now.getMinutes()

    // console.log(now)
    // console.log(year)
    // console.log(month)
    // console.log(date)
    // console.log(day)
    // console.log(hour)
    // console.log(minute)

    let target = Number(String(now.getHours()) + String(now.getMinutes()))
    console.log(target)
    
    let message = 'Message : '
    
    if(0 <= target && 1000 > target) {
        message += 'good morning'
    } else if(1000 <= target && 1800 > target) {
        message += 'good afternoon'
    } else if(1800 <= target && 2359 >= target) {
        message += 'good evening'
    }

    console.log(message) 
}

checkTime()