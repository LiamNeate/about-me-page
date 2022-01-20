$(".mainForm").hide();

$("a").click(function (event) {
    event.preventDefault();
    $(".mainForm").toggle();
})

document.getElementById('mainForm').addEventListener('submit', (e) => {

    e.preventDefault();

    msg.textContent = 'Thank you ' + userName.value + '! Your email is ' + email.value
});