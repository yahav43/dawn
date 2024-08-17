document.addEventListener('DOMContentLoaded', function(e) {

  const warDateTextElement = document.querySelectorAll('.product__info-container .product__text.inline-richtext');
  
  warDateTextElement.forEach((element) => {
    let warDate = element.querySelector('time.metafield-date').getAttribute('datetime');

    // The given date
    let givenDate = new Date(warDate);

    // Get the current date
    let currentDate = new Date();

    // Calculate the difference in time (in milliseconds)
    let timeDifference = currentDate - givenDate;

    // Convert time difference from milliseconds to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    element.innerHTML = `${daysDifference}`;
  });
});