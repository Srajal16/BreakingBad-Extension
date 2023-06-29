document.addEventListener('DOMContentLoaded', function() {
  const quoteButton = document.getElementById('quoteButton');
  const quoteText = document.getElementById('quoteText');

  quoteButton.addEventListener('click', function() {
    const apiUrl = 'https://api.breakingbadquotes.xyz/v1/quotes/5';

    try {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          quoteText.innerHTML = data[0].quote;
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } catch (error) {
      console.log('Error:', error);
    }
  });
});
