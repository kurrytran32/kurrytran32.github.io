var aboutbtn = document.getElementById('aboutbtn');
var projbtn = document.getElementById('projbtn');
var contactbtn = document.getElementById('contactbtn');


//enabling smooth scrolling to sections
aboutbtn.addEventListener("click", function (event) {
    document.getElementById('abtme').scrollIntoView({
        behavior: 'smooth',
    });
});

projbtn.addEventListener("click", function (event) {
    document.getElementById('project').scrollIntoView({
        behavior: 'smooth'
    });
});
contactbtn.addEventListener("click", function (event) {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});



document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
})