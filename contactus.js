        // Handle form submission
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Display thank you message
            document.getElementById('thankYouMessage').style.display = 'block';
            document.getElementById('contactForm').reset(); // Reset the form
        });
  