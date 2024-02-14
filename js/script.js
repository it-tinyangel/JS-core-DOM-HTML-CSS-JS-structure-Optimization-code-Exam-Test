document.addEventListener("DOMContentLoaded", function () {
	const getS = selector => document.querySelector(selector);
	const colors = ['black', 'gray', 'white', 'cyan', 'magenta', 'yellow', 'red', 'green', 'blue'];

	getS('.btn-edit').addEventListener('click', () => {
		getS('.edit-block').classList.add('show');
		getS('.style-block').classList.remove('show');
		getS('textarea.edit-area').value = getS('.top-block').innerHTML;
	});

	getS('.btn-style').addEventListener('click', () => {
		getS('.style-block').classList.add('show');
		getS('.edit-block').classList.remove('show');
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