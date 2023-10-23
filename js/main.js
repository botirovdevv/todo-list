const input = document.querySelector('.form-input')
const form = document.querySelector('form')
const ul = document.querySelector('.todo-list')
const clearBtn = document.querySelector('.todo__clear')
const add = document.querySelector('.form-btn')
let isEdited = null



form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value === '' || !input.value.trim()) {
        input.classList.add('error')
        setTimeout(function () {
            input.classList.remove('error')
        }, 800)
    }else {
        createTodo(input.value)
        input.value = ''
    }
})


function createTodo(value) {
    const todo = {
        id: Date.now(),
        text: value,
        isCompleted: false
    }
    createTodoItem(todo)
}

function createTodoItem(todo) {
    const li = document.createElement('li')
    li.className = 'todo-item'
   setTimeout(function(){
    li.classList.add('show')
   }, 1) 
    li.id = todo.id

    li.addEventListener('click', () => {
         li.classList.toggle('completed')
    })

    const span = document.createElement('span')
    span.className = 'todo-text'
    span.textContent = todo.text

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'todo-delete'
    deleteBtn.innerHTML = "<i class='bx bxs-trash'></i>"
    
    deleteBtn.addEventListener('click', (event) => {
        deleteBtn.parentElement.classList.remove('show')
        setTimeout(function(){
            deleteBtn.parentElement.remove()
        }, 300)
    })
    

    li.append(span, deleteBtn)
    ul.append(li)
}

clearBtn.addEventListener('click', function(){
    ul.innerHTML = ''
})

