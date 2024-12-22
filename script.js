 // JavaScript to toggle the active class
 const links = document.querySelectorAll('.link-item');
    
 links.forEach(link => {
   link.addEventListener('click', function() {
     // Remove active class from all links
     links.forEach(link => link.classList.remove('active'));
     // Add active class to the clicked link
     this.classList.add('active');
   });
 });





 const banner = document.getElementById('banner');
 let hasScrolled = false;

 // Show banner on page load
 window.onload = () => {
   banner.style.top = "0";
 };

 // Hide banner when scrolling
 window.addEventListener('scroll', () => {
   if (!hasScrolled) {
     banner.style.top = "-100px";
     hasScrolled = true;
   }
 });

 // Close banner button functionality
 function closeBanner() {
   banner.style.top = "-100px";
 }