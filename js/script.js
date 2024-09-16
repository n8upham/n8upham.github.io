document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons and content lists
    const buttons = document.querySelectorAll('.expandable-button');
    const contents = document.querySelectorAll('.expandable-content');

    // Store the original button text
    const originalButtonText = Array.from(buttons).map(button => button.textContent);

    // Add click event listener to each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const content = contents[index];
            if (content.style.display === 'block') {
                // If content is currently visible, hide it and reset button text
                content.style.display = 'none';
                button.textContent = originalButtonText[index];
            } else {
                // Hide all other lists and reset their buttons
                contents.forEach((otherContent, i) => {
                    if (i !== index) {
                        otherContent.style.display = 'none';
                        buttons[i].textContent = originalButtonText[i];
                    }
                });
                // Show the clicked list and update its button text
                content.style.display = 'block';
                button.textContent = 'Collapse Projects Q' + (index + 1);
            }
        });
    });

    // Close all lists if the user clicks outside of any list
    window.addEventListener('click', function (event) {
        if (!event.target.closest('.expandable-list')) {
            contents.forEach((content, i) => {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    buttons[i].textContent = originalButtonText[i]; // Reset button text
                }
            });
        }
    });
});
