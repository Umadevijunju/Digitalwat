document.addEventListener('DOMContentLoaded', function() {
    const clockElement = document.getElementById('clock');
    const timeForm = document.getElementById('timeForm');
    const timeInput = document.getElementById('timeInput');
    const resultElement = document.getElementById('result');

    // Update the clock every second
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Start the clock immediately and then update every second
    updateClock();
    setInterval(updateClock, 1000);

    // Handle form submission
    timeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const timeValue = timeInput.value;
        if (timeValue) {
            resultElement.textContent = `You entered: ${timeValue}`;
        }
    });

    // Handle input change event
    timeInput.addEventListener('input', function() {
        resultElement.textContent = `Current input: ${timeInput.value}`;
    });

    // Handle button mouseover and mouseout events
    document.querySelector('button').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#218838'; // Darker green on hover
    });

    document.querySelector('button').addEventListener('mouseout', function() {
        this.style.backgroundColor = '#28a745'; // Original green
    });
});
