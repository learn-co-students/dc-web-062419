document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', submitForm)
  const sortButton = document.querySelector('#sort')
  const todoList = document.getElementById('list')
  sortButton.addEventListener('click', sortListOrder)
});
  
  function submitForm(event) {
    event.preventDefault()
    
    const priority = event.target['priority'].value
    // debugger
    
    //  CREATING LIST ELEMENT AND APPENDING TO UL
    const listText = document.getElementById('new-task-description')
    const listItem = document.createElement('li')
    listItem.classList.add(priority)
    const todoList = document.getElementById('list')
    todoList.appendChild(listItem).innerText = listText.value
  }
  
  function sortListOrder(event) {
    // Select parent list elem and children eleme classes by their priority
    const red = document.querySelectorAll('.red')
    const yellow = document.querySelectorAll('.yellow')
    const green = document.querySelectorAll('.green')
    const todoList = document.getElementById('list')
    todoList.innerHTML = `<ul id="tasks"> </ul >`
    red.forEach(redNode => {
      todoList.appendChild(redNode)
    })
    yellow.forEach(yellowNode => {
      todoList.appendChild(yellowNode)
    })
    green.forEach(greenNode => {
      todoList.appendChild(greenNode)
    })
  }