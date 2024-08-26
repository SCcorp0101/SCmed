document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg'
    ];
    
    const backgroundElement = document.getElementById('dynamic-background');
    let currentIndex = 0;
    
    function changeBackground() {
        backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    setInterval(changeBackground, 5000); // Change image every 5 seconds
    changeBackground(); // Set initial background
});
