
let countDownDate = new Date("January 01, 2025 00:00:00").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);


  document.querySelector(".days").innerHTML =  days < 10 ? `0${days}  Days` : `${days} Days`  ;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours} Hours` : `${hours} Hours`;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes} Minutes`:  `${minutes}  Minutes`;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds} Seconds`:  `${seconds} Seconds`;

 
  if (dateDiff < 0 ) {
    clearInterval(counter);
    document.querySelector(".time").style.display = "none";
    document.getElementById("Quote").style.display = "block";
  }
},1000);
