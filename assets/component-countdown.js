document.addEventListener('DOMContentLoaded', function () {
  let data = document.getElementById('countdown').dataset.date;
  let target_date = new Date(data).getTime() + 1000 * 24;
  let days, hours, minutes, seconds;

  if (document.getElementById('tiles') != null) {
    getCountdown();

    setInterval(() => {
      getCountdown();
    }, 1000);

    function getCountdown() {
      // find the amount of "seconds" between now and target
      let current_date = new Date().getTime();
      let seconds_left = (target_date - current_date) / 1000;

      days = pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));

      $('.tiles-time-days').html(days + '<span class="tiles-time-days-small"> :</span>');
      $('.tiles-time-hours').html(hours + '<span class="tiles-time-hours-small"> :</span>');
      $('.tiles-time-minutes').html(minutes + '<span class="tiles-time-minutes-small"> :</span>');
      $('.tiles-time-seconds').html(seconds);
    }

    function pad(n) {
      return (n < 10 ? '0' : '') + n;
    }
  }

  // const startTime = new Date(data).getTime(); // GMT +0300
  // const endTime = startTime + (30 * 60 * 60 * 1000); // 30 hours later
  // const totalCount = 500;
  // const fastPhaseDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  function getCurrentCount() {
    const now = Date.now();
    if (now < startTime) {
      return totalCount; // Countdown hasn't started yet
    } else if (now > endTime) {
      return 0; // Countdown has ended
    } else {
      const elapsed = now - startTime;

      if (elapsed <= fastPhaseDuration) {
        // First 2 hours - from 500 to 250
        return Math.round(500 - (elapsed / fastPhaseDuration) * 150);
      } else {
        // After first 2 hours - from 250 to 0 over the remaining hours
        const normalPhaseElapsed = elapsed - fastPhaseDuration;
        const normalPhaseDuration = endTime - startTime - fastPhaseDuration;
        return Math.round(150 - (normalPhaseElapsed / normalPhaseDuration) * 150);
      }
    }
  }

  function updateCounter() {
    // const count = getCurrentCount();
    const count = 0;
    // $("#countdownDisplay").text(count + (count === 1 ? " ORDER LEFT" : " ORDERS LEFT"));
    if (count > 1) {
      $('#countdownDisplay').text('מהדורה מוגבלת - נותרו ' + count + ' יחידות');
    } else if (count === 1) {
      $('#countdownDisplay').text('מהדורה מוגבלת - נותרה יחידה אחת');
    }

    if (count > 0) {
      setTimeout(updateCounter, 1000); // Update every second
    } else {
      $('#countdownDisplay').text('מהדורה מוגבלת - המלאי אזל');
    }
  }

  // updateCounter();
});
