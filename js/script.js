document.addEventListener("DOMContentLoaded", function () {
	const getS = selector => document.querySelector(selector);
	// const getAllS = selector => document.querySelectorAll(selector);
	const applyStyleForm = document.forms['applyStyleForm'];
	
	const colors = ['black', 'gray', 'white', 'cyan', 'magenta', 'yellow', 'red', 'green', 'blue'];

	getS('.btn-edit').addEventListener('click', () => {
		getS('.edit-block').classList.add('show');
		getS('.style-block').classList.remove('show');
		getS('.edit-area').value = getS('.top-block').innerHTML;
	});

	getS('.btn-style').addEventListener('click', () => {
		getS('.style-block').classList.add('show');
		getS('.edit-block').classList.remove('show');
	})

	getS('.btn-save').addEventListener('click', () => {
		getS('.edit-block').classList.remove('show');
		getS('.top-block').innerHTML = getS('textarea.edit-area').value;
	})

	// getAllS('input[name="fontSize"]').forEach(function (radio) {
	// 	radio.addEventListener('click', function () {
	// 		getS('.top-block').style.fontSize = event.target.value;
	// 	});
	// });

	applyStyleForm.elements['fontSize'].forEach(function (radio) {
		radio.addEventListener('click', function () {
			getS('.top-block').style.fontSize = event.target.value;
		});
	});

	applyStyleForm.elements['fontFamily'].addEventListener('click', () => {
		getS('.top-block').style.fontFamily = event.target.value;
	})

	getS('.btn-text-color').addEventListener('click', () => {
		getS('.colors').classList.remove('hide');
		for (let i = 0; i < getS('.colors').children.length; i++) {
			getS('.colors').children[i].style.backgroundColor = colors[i];
			getS('.colors').children[i].onclick = function () {
				console.log('textcolor');
				getS('.top-block').style.color = this.style.backgroundColor;
			}
		}
	});

	getS('.btn-bg-color').addEventListener('click', () => {
		getS('.colors').classList.remove('hide');
		for (let i = 0; i < getS('.colors').children.length; i++) {
			getS('.colors').children[i].style.backgroundColor = colors[i];
			getS('.colors').children[i].onclick = function () {
				console.log('backgroundColor');
				getS('.top-block').style.backgroundColor = this.style.backgroundColor;
			}
		}
	});
});
