/**
 * Detect when user scrolls past 400px and shrink the nav and logo
 */
window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;
    if (scrollPos > 400) {
        document.getElementById("header").classList.add("shrink");
        document.getElementById("logo").classList.add("shrink");
    } else {
        document.getElementById("header").classList.remove("shrink");
        document.getElementById("logo").classList.remove("shrink");
    }
});


/**
 *  Send email using Email.js service
 */
function sendMail(contactForm) {
    emailjs.send("actonaid", "aacontactForm", {
        "from_name": contactForm.name.value,
        "from_address": contactForm.address.value,
        "from_tel": contactForm.tel.value,
        "from_email": contactForm.email.value,
        "reason": contactForm.reason.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}