// Date
const date1= new Date() // Atual
//console.log(date1)
//console.log(date1.toISOString()) 2022-12-29T22:31:01.767Z

const date2= new Date('March 06 2019 09:30') //2019-03-06T12:30:00.000Z

//console.log(date2)

const date3= new Date(2019,02,06,9,35) //2019-03-06T12:35:00.000Z (YYY,MMM,DDD,HOURS,MINUTES)
date3.setFullYear(2090) // 2090-03-06T12:35:00.000Z
console.log(date3.toTimeString()) // 09:35:00 GMT-0300 (Brasilia Standard Time)
console.log(date3.toDateString()) // Mon Mar 06 2090


