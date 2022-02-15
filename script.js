const dSubmit = document.getElementById('submit');
const storeData = [];
let typer = document.getElementById('type');
let input = document.getElementById('text');
const list = document.getElementById('listHolder');

dSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	if (input.value == "") {
		typer.innerHTML = "Please enter a task";
	} else {
	typer.innerHTML = "";
	store();
	}
	});

function store() {
	const tData = document.getElementById('text').value;
	storeData.push(tData);
	updater();
	input.value = "";
}

function deleter (index) {
	storeData.splice(index, 1);
	updater();
}

function updater() {
	let htmlCode = "";
	storeData.forEach(function(item, index){
	htmlCode += "<div class='test'><div id = "+ index +">" + item + "</div><div class='org-button'><button type='button' class='org-button' onClick= 'editF("+ index +")'>Edit</button><button class='org-button' onClick= 'deleter("+ index +")'>Delete</button> </div> </div>"
	})
	list.innerHTML = htmlCode;
}

function editF (index) {
	let tempOne = document.getElementById(index);
	let tempTwo = "<input class='editInput' id='inputText"+String(index)+"' type='text' name='task' value ='" + String(storeData[index]) + "'><button class='org-button' id='saveText"+String(index)+"' onClick= 'save("+index+")' >Save</button>"
	tempOne.innerHTML = tempTwo;
}

function save (index) {	
	console.log('test1')
	let tempOne= document.getElementById('saveText'+String(index));
	let tempTwo = document.getElementById('inputText'+String(index));
	console.log('test2')
	function foo (){
	console.log('test3')
	storeData.splice(index,1,tempTwo.value)
	updater()
	}
	foo();
}

//test


