document.addEventListener("DOMContentLoaded", function () {
	const getS = selector => document.querySelector(selector);
	const getID = (selector) => document.getElementById(selector);

	const applyStyleForm = document.forms['applyStyleForm'];
	const createForm = document.forms['createForm'];
	const createTableForm = document.forms['createTableForm'];
	const createListForm = document.forms['createListForm'];
	const colors = ['black', 'gray', 'white', 'cyan', 'magenta', 'yellow', 'red', 'green', 'blue'];

	getID('editButton').addEventListener('click', () => {
		getID('applyStyleForm').classList.add('hide');
		getID('editBlock').classList.remove('hide');

		getID('editArea').value = getID('topBlock').innerHTML;
	});

	getID('styleButton').addEventListener('click', () => {
		getID('editBlock').classList.add('hide');
		getID('applyStyleForm').classList.remove('hide');
	})

	getID('saveButton').addEventListener('click', () => {
		getID('editBlock').classList.remove('show');
		getID('topBlock').innerHTML = getS('textagetIDea#editArea').value;
	})

	applyStyleForm.elements['fontSize'].forEach(function (radio) {
		radio.addEventListener('click', function () {
			getID('topBlock').style.fontSize = event.target.value;
		});
	});

	applyStyleForm.elements['fontFamily'].addEventListener('click', () => {
		getID('topBlock').style.fontFamily = event.target.value;
	})

	getID('textColorButton').addEventListener('click', () => {
		getS('.colors-box').classList.toggle('hide');
		for (let i = 0; i < getS('.colors-box').children.length; i++) {
			getS('.colors-box').children[i].style.backgroundColor = colors[i];
			getS('.colors-box').children[i].onclick = function () {
				getID('topBlock').style.color = this.style.backgroundColor;
			}
		}

	});

	getID('bgColorButton').addEventListener('click', () => {
		getS('.colors-box').classList.toggle('hide');
		for (let i = 0; i < getS('.colors-box').children.length; i++) {
			getS('.colors-box').children[i].style.backgroundColor = colors[i];
			getS('.colors-box').children[i].onclick = function () {
				getID('topBlock').style.backgroundColor = this.style.backgroundColor;
			}
		}
	});

	applyStyleForm.elements['boldFontStyle'].addEventListener('click', (event) => {
		if (event.target.checked) {
			getID('topBlock').classList.add('bold');
		} else {
			getID('topBlock').classList.remove('bold');
		}
	});

	applyStyleForm.elements['cursiveFontStyle'].addEventListener('click', (event) => {
		if (event.target.checked) {
			getID('topBlock').classList.add('cursive');
		} else {
			getID('topBlock').classList.remove('cursive');
		}
	});

	getID('addButton').addEventListener('click', () => {
		getID('firstSection').style.display = 'none';
		getID('secondSection').classList.remove('hide');
	});

	createForm.elements['tableFormSelection'].addEventListener('click', () => {
		getID('createListForm').classList.add('hide');
		createTableForm.classList.remove('hide');

	});

	createForm.elements['listFormSelection'].addEventListener('click', () => {
		getID('createTableForm').classList.add('hide');
		createListForm.classList.remove('hide');
	});

	getID('createTableButton').addEventListener('click', () => {
		getID('firstSection').style.display = 'flex';
		getID('secondSection').classList.add('hide');
	});


	getID('createListButton').addEventListener('click', () => {
		getID('firstSection').style.display = 'flex';
		getID('secondSection').classList.add('hide');
	});

});
