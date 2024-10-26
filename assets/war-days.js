document.addEventListener('DOMContentLoaded', function(e) {

  // Get the current date
  const currentDate = new Date();
  let warDateTextElements = document.querySelectorAll('.template--landing .shopify-section:nth-child(2) .rich-text__blocks time');

  console.log(warDateTextElements);
  
  for (let i = 0; i < warDateTextElements.length; i++) {
    let warDate = warDateTextElements[i].getAttribute('datetime');
    let warDateElement = warDateTextElements[i].parentElement;

    // The given date
    let givenDate = new Date(warDate);

    // Calculate the difference in time (in milliseconds)
    let timeDifference = currentDate - givenDate;

    // Convert time difference from milliseconds to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    warDateElement.innerHTML = daysDifference;
  }
});