const signin = document.getElementById('signin');
const signup = document.getElementById('signup');
const body = document.querySelector('body');

signup.onclick = function () {
	body.classList.add('signup');
};

signin.onclick = function () {
	body.classList.remove('signup');
};
