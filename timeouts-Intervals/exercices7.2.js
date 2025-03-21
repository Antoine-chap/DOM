const countSecond = () => {
    let time = 0;
    let minute = "minutes se sont écoulées";
    let numberMinute = 0;
    const p = document.body.appendChild(document.createElement("p"));
    
   setInterval(() => {
time++;
if (time % 60 == 0){
    numberMinute++;
    p.textContent = `${numberMinute} ${minute}`
} else {
    p.textContent = time
}
},1000)
}
countSecond();




// const countSecond = (times,messages,minutes) => {
//     let time = times;
//     let minute = messages;
//     let numberMinute = minutes;
//    setInterval(() => {
// time++;
// if (time % 60 == 0){
//     numberMinute++;
//     console.log(`${numberMinute} ${minute}`)
// } else {
//     console.log(time)
// }
// },1000)
// }
// countSecond(0,`oeuf`,0);


