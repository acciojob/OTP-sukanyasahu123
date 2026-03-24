inputField.addEventListener('input', function() {
    if (this.value.length === 1) {
        // Shift focus to the next input
        nextInputField.focus();
    }
});

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' && this.value.length === 0) {
        // Shift focus to the previous input
        previousInputField.focus();
    }
});