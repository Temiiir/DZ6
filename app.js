var courseGeeks = {
    name: 'Geeks',
    foundingDate: 2017,
    address: {
        street: 'Ibraimova 103',
        number: null,
    },
    branches: undefined,
    showInfo() {
        // console.log(`Курсы - ${courseGeeks.name} `)
        console.log(`Курсы - ${this.name} `)
    },
    showInfo2(){
        function info (){
            console.log(`Курсы - ${this.name} `)
        }
        info()
    }
}

courseGeeks.showInfo()
courseGeeks.showInfo2()

// DOM

// const input = document.querySelector('#input')
// const createButton = document.querySelector('#create_button')
// const todoList = document.querySelector('#todo_list')
//
// const createTodo = () =>{
//     if(input.value.trim() === ''){
//         return alert('Нельзя вводить пустоту или пробелы')
//     }
//     const div = document.createElement('div')
//     div.setAttribute('class', 'block_text')
//
//     const divButtons = document.createElement('button')
//     divButtons.setAttribute('class', 'div_buttons')
//
//     const text = document.createElement('h3')
//
//     const deleteButton = document.createElement('button')
//     deleteButton.setAttribute('class', 'delete_button')
//
//     const editButton = document.createElement('button')
//     editButton.setAttribute('class', 'edit_button')
//
//
//     deleteButton.innerHTML = 'DELETE'
//     editButton.innerHTML = 'EDIT'
//
//     text.innerHTML = input.value
//     divButtons.append(deleteButton, editButton)
//     div.append(text, divButtons)
//
//     todoList.prepend(div)
//     input.value = ''
// }
//
// createButton.onclick = () => createTodo()

const input = document.querySelector('#input')
const creatButton = document.querySelector('#create_button')
const todoList = document.querySelector("#todo_list")

const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons = document.createElement('button')
    divButtons.setAttribute('class', 'div_buttons')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'
    text.innerHTML = input.value
    divButtons.append(deleteButton,editButton)
    div.append(text, divButtons)

    deleteButton.onclick = () => div.remove()


    const modal = document.querySelector(".modal")
    const editValue = document.querySelector(".edit_value")
    const exitValue = document.querySelector(".exit_button")
    const modalInp = document.querySelector("#modal_input")
    editButton.onclick=()=>{
        modal.style.display = "block"
        exitValue.onclick=()=>{
            modal.style.display = "none"
        }
        editValue.onclick=()=>{
            if(modalInp.value.trim() === ''){
                alert('Нельзя вводить пустоту или пробелы')
                modalInp.innerHTML=""
            }else{
                text.innerHTML = modalInp.value
                modal.style.display = "none"
                modalInp.value=""
            }
        }
    }

    text.addEventListener('click',  () => text.classList.toggle('toggle'))


    todoList.prepend(div)
    input.value = ''

}

creatButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if(event.code === 'Enter'){
        createTodo()
    }
}


const cInp = document.querySelector("#counter_inp")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")

const doGray = ()=>{
    cInp.style.color = "gray"
}
doGray()
let counter = 0
cInp.value = counter

plus.onclick=()=>{
    ++counter
    cInp.value = counter
    if (cInp.value>0){
        cInp.style.color = "green"
    }else if(counter===0){
        doGray()
    }
}

minus.onclick=()=>{
    --counter
    cInp.value = counter
    if (cInp.value<0){
        cInp.style.color = "red"
    }else if(counter===0){
        doGray()
    }

}





