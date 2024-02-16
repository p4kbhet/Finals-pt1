document.addEventListener("DOMContentLoaded", function() {

    var projectImages = document.querySelectorAll("#worksTable img");


    projectImages.forEach(function(image) {
        image.addEventListener("click", function() {
            
            var projectLink = image.getAttribute("data-link");
            
            
            window.location.href = projectLink;
        });
    });
});
