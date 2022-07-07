// *----- Show Other Links Section ----*
const otherLinks = document.querySelector(".other-link");
const megaMenu = document.querySelector(".mega-menu");
otherLinks.addEventListener("click", () => {
    megaMenu.classList.toggle("show-mega-menu");
})
// *----- End Show Other Links Section ----*

//  *---------- start time ------------*
let futureTime = new Date("Sep 02,2022 22:00:00").getTime();
let counter = setInterval(() => {
    // get date now
    let getDate = new Date().getTime();
    // get the diffrence between now and future time
    let dateDiff = futureTime - getDate;

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // get time unites
    let days = Math.floor(dateDiff / oneDay);
    let hours = Math.floor((dateDiff % oneDay) / oneHour);
    let minutes = Math.floor((dateDiff % oneHour) / oneMinute);
    let seconds = Math.floor((dateDiff % oneMinute) / 1000);

    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    const d = document.querySelector(".days").innerHTML = days;
    const h = document.querySelector(".hours").innerHTML = hours;
    const m = document.querySelector(".minutes").innerHTML = minutes;
    const s = document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
//  *---------- end time ------------*