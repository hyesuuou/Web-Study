var button = document.getElementById('input_todo_button');
var input = document.getElementById('input_todo');
var list = document.getElementById('todo_list');



function clickInputButton(){
  var temp = document.createElement('li');
  temp.innerHTML = input.value;
  list.appendChild(temp);
}

button.addEventListener('click', clickInputButton)
