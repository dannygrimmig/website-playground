document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var submitBtn = document.getElementById("emailsubmit");
submitBtn.addEventListener("click", () => {
    window.alert("Signed Up!");
})