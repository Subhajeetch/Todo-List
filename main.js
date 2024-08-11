let myTodoList = JSON.parse(localStorage.getItem('todo-list')) || [];


showTodoList();

function showTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < myTodoList.length; i++) {
    const todo = myTodoList[i];
  
  const { todoName, date, time } = todo; 
  
    const html = `
    
    <div class="todo-info">
      <p>${todoName}</p>
    </div>
    
    <div class="todo-info">
      <p>${date}</p>
    </div>
    
    <div class="todo-info">
      <p>${time}</p>
    </div>
    
      <button onclick="
        myTodoList.splice(${i}, 1);
        showTodoList();
      " class="delete-btn"><img src="/images/delete.png" alt="delete" class="delete-png"></button> 
    `;
    
    todoListHtml += html;
  };

  localStorage.setItem('todo-list', JSON.stringify(myTodoList));

  document.querySelector('.js-todo-list')
      .innerHTML = todoListHtml;
};



function addArray() {
   const getArray = document.querySelector('.get-array-js');
   const todoName = getArray.value;
   
   const getDate = document.querySelector('.js-get-date');
   const date = getDate.value;
   
   const getTime = document.querySelector('.js-get-time')
   const time = getTime.value; 
   
   myTodoList.push({todoName, date, time});
    document.querySelector('.get-array-js').value = '';
    
    showTodoList();
};

