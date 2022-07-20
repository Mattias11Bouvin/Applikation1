window.onload=function(){

let changelinkTextBtn = document.getElementById('change-link-text-btn');
let changelinkTextInput = document.getElementById('change-link-text-input');

let todoText = document.getElementById('todo');


let doneText = document.getElementById("doneText");


changelinkTextBtn.addEventListener('click', function (e) { 
e.preventDefault();
let toDoList = document.createElement("li");
let toDoElement = document.createElement("input");
let doneButton = document.createElement("button");
let toDoRemoveButton = document.createElement("button");
let toDoChangeButton = document.createElement("button");


  toDoElement.type = 'text';

  toDoList.append(toDoElement);
  toDoList.append(toDoChangeButton);
  toDoList.append(doneButton);
  toDoList.append(toDoRemoveButton);

  toDoElement.value = changelinkTextInput.value;
  toDoElement.disabled = true;
  
  toDoChangeButton.innerHTML = "Ändra";
 
  doneButton.innerHTML = "Färdig";
  doneButton.setAttribute('id', "doneButton");
  
  toDoRemoveButton.innerHTML = "Radera";

  todoText.appendChild(toDoList);
  doneButton.addEventListener('click', function (e) { 
      e.preventDefault();
      let doneElement = document.createElement("input");
      let doneList = document.createElement("li");
      let doneRemoveButton = document.createElement("button");
      let doneChangeButton = document.createElement("button");


      doneElement.type = 'text';
      
      doneList.append(doneElement);
      doneList.append(doneChangeButton);
      doneList.append(doneRemoveButton);
    
      doneElement.value = toDoElement.value;
      doneElement.disabled = true;
      
      doneChangeButton.innerHTML = "Ändra";
    
    
      doneRemoveButton.innerHTML = "Radera";
      doneText.appendChild(doneList);
      toDoList.remove();
      doneChangeButton.addEventListener('click', function (e) {
        doneElement.disabled = false;
      })
    
      doneRemoveButton.addEventListener('click', function (e) {
        doneList.remove();
      })
  })

  toDoChangeButton.addEventListener('click', function (e) {
    toDoElement.disabled = false;
  })

  toDoRemoveButton.addEventListener('click', function (e) {
    toDoList.remove();
  })

  
  
  
})




}