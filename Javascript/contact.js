let mailChange = document.getElementById('email');

function changeEmailTextColor() {
    mailChange.style.color = 'blue';
};

mailChange.addEventListener('mouseover', changeEmailTextColor);