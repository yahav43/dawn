document.addEventListener('DOMContentLoaded', function(e) {

  // Get the current date
  const currentDate = new Date();
  let warDateTextElements = document.querySelectorAll('.product__info-container .product__text.inline-richtext');
  
  for (let i = 0; i < warDateTextElements.length; i++) {
    let warDateElement = warDateTextElements[i].querySelector('.metafield-date');
    let warDate = warDateTextElements[i].querySelector('.metafield-date').getAttribute('datetime');

    // The given date
    let givenDate = new Date(warDate);

    // Calculate the difference in time (in milliseconds)
    let timeDifference = currentDate - givenDate;

    // Convert time difference from milliseconds to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Prepend new text without overwriting the existing content
    warDateElement.innerText = daysDifference + ' ימים';
  }
});