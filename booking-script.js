const bookBtns = document.querySelectorAll('.book-btn');

bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const teacher = btn.getAttribute('data-teacher');
        // You can now implement your appointment booking logic here
        // This could include displaying a booking form, checking teacher availability,
        // handling user input, storing appointments in a database, and sending notifications to teachers.
        alert(`Booking an appointment with ${teacher}`);
    });
});
