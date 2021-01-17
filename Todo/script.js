var button = document.getElementById('input_todo_button');
var input = document.getElementById('input_todo');
var list = document.getElementById('todo_list');



function clickInputButton(){
  var temp = document.createElement('li');
  if (input.value === ""){
    return ;
  }
  temp.innerHTML = input.value;
  list.appendChild(temp);
  input.value="";
}

button.addEventListener('click', clickInputButton)
