const hoverBox = document.getElementById('hoverBox');

// Change background color on mouse over
hoverBox.addEventListener('mouseover', function() {
    hoverBox.style.backgroundColor = 'lightcoral';
});

// Revert background color on mouse out
hoverBox.addEventListener('mouseout', function() {
    hoverBox.style.backgroundColor = 'lightblue';
});