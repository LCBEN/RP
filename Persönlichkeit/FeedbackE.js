function calculateTotal() {
  let total = 0;
  const keys = [1, 4, 9, 11, 16, 21, 22, 28]; // Array mit den spezifischen Schlüsselnummern

  keys.forEach(function(key) {
    total += parseFloat(sessionStorage.getItem('selectedAnswer' + key)) || 0;
  });

  return total;
}

function getFeedback(total) {
  if (total > 0) {
    return "Was hier los";
  } else {
    return "Test";
  }
}


function displayFeedback() {
  // Berechnen Gesamtwert
  const total = calculateTotal();

  // Feedback-Text basierend auf dem Gesamtwert
  const feedbackText = getFeedback(total);

  // Den Feedback-Text auf der Seite anzeigen
  const feedbackElement = document.querySelector('#feedback');
  feedbackElement.innerHTML =feedbackText;
}
  document.addEventListener('DOMContentLoaded', function() {
  displayFeedback();
});
