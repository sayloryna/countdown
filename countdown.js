const deadline= new Date("Apr 2 2024 09:00:00 GMT+0200")
 const now = new Date()


 console.log(remainingDays)

function getRemainingTime (deadline) {
    let now = new Date(),
        remainTime = (new Date(deadline) - now +1000)/1000,
        remainSeconds =( '0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes =( '0' + Math.floor(remainTime /60 % 60)).slice(-2),
        remainHours =( '0' + Math.floor(remainTime /3600 % 24)).slice(-2),
        remainDays = ( '0' + Math.floor(remainTime /(3600 *24))).slice(-2);
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,

    }

 };

 const countdown = (deadline,elem,finalMessage)=>{
    const el = document.getElementById(elem);
    const timerUpdate =setInterval( ()=>{
        let time = getRemainingTime(deadline);
        el.innerHTML = `${time.remainDays}Days:${time.remainHours}Hours:${time.remainMinutes}Min:${time.remainSeconds}Sec`;
        if(time.remainTime <=1){
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage
        }

    },1000)

 }
 console.log(countdown(deadline, clock, "EMPEZAMOS"))