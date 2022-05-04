const cfg = {
  // Countdown Timer Final Date
  // July 31st 11:59 PM
  finalDate: "July 31, 2022 11:59:00",
  // MailChimp URL
  mailChimpURL:
    "https://facebook.us1.list-manage.com/subscribe/post?u=1abf75f6981256963a47d197a&amp;id=37c6d8f4d6",
};

/* Countdown Timer
 * ------------------------------------------------------ */
export const ssCountdown = function () {
  const finalDate = new Date(cfg.finalDate).getTime();
  const daysSpan = document.querySelector(".counter .ss-days");
  const hoursSpan = document.querySelector(".counter .ss-hours");
  const minutesSpan = document.querySelector(".counter .ss-minutes");
  const secondsSpan = document.querySelector(".counter .ss-seconds");
  let timeInterval;

  if (!(daysSpan && hoursSpan && minutesSpan && secondsSpan)) return;

  function timer() {
    const now = new Date().getTime();
    let diff = finalDate - now;

    if (diff <= 0) {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
      return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    //   if (days <= 99) {
    //     if (days <= 9) {
    //       days = "00" + days;
    //     } else {
    //       days = "0" + days;
    //     }
    //   }

    if (hours <= 9) {
      hours = "0" + hours;
    }
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }
    if (seconds <= 9) {
      seconds = "0" + seconds;
    }

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
  }

  timer();
  timeInterval = setInterval(timer, 1000);
};
