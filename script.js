var button = document.querySelectorAll('button')[0];
var input  = document.querySelectorAll('input')[0];
var ul     = document.querySelectorAll('ul')[0];

function inputCheck() {
	if (input.value.length > 0) {
		return true
	} 
}

function newElement(){
	var li = document.createElement('li');
	var but = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	but.appendChild(document.createTextNode('delete'));
	ul.appendChild(li);
	ul.appendChild(but);
	input.value = '';
}

function addToListAfterClick(){
	if (inputCheck()) {
		newElement();
	}
}

function addToListAfterEnter(event){
	if (inputCheck() && event.keyCode === 13) {
		newElement();
	}

}

function toggleDoneStyle(element){
	if (element.nodeName === 'LI'){
	element.classList.toggle('done');
	}
}

function deleteElement(element){
	if (element.nodeName === 'BUTTON'){
		element.previousSibling.remove();
		element.remove()
	}
}

function ulClick(event){
	var element = event.target
	toggleDoneStyle(element);
	deleteElement(element);
}


button.addEventListener('click', addToListAfterClick);
input.addEventListener('keypress', addToListAfterEnter);
ul.addEventListener('click', ulClick);