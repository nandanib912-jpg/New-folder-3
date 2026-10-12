document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Donate buttons
    document.querySelectorAll('a[href="#donate"]').forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Thank you for supporting our NGO!");
        });
    });

    // Highlight navigation link on click
    document.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.querySelectorAll("nav a").forEach(function (item) {
                item.style.color = "#333";
            });

            this.style.color = "#f58220";
        });
    });

    // Welcome message
    console.log("Welcome to Hope Foundation NGO Website!");

});
