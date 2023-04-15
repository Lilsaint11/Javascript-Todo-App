window.addEventListener('load', () =>{
    
    const main = document.querySelector(".main");
    const input= document.querySelector(".input");
    const add = document.querySelector(".add");
    getTodos();

    function addTodoList(){
        
            if(!input.value){
                alert("Input a Todo list");
                return;
            }
           
            const note_div = document.createElement('div');
            note_div.classList.add("notes");
            
            
            const note_el = document.createElement('input');
            note_el.classList.add('note');
            note_el.type = "text";
            note_el.value = input.value
            note_el.setAttribute("readonly","readonly");
            
            saveTodos(input.value);
        
            const edit = document.createElement('button');
            edit.classList.add("edit");
            edit.innerHTML = "edit";
        
            const remove = document.createElement('button');
            remove.classList.add("delete");
            remove.innerHTML = "delete";
        
            
            main.appendChild(note_div);
            note_div.appendChild(note_el);
        
            const actions = document.createElement('div');
            actions.appendChild(edit);
            actions.appendChild(remove);
        
            note_div.appendChild(actions);
            input.value="";
        
            edit.addEventListener('click',(e) => {
                if(edit.innerText=="edit"){
                note_el.removeAttribute("readonly");
                note_el.focus()
                edit.innerText = "save";
                edit.classList.add("green");
                }else{
                    editTodos(note_el.value);
                    note_el.setAttribute("readonly","readonly");
                    edit.innerText = "edit";
                    edit.classList.remove("green");
                } ;
            });
        
            remove.addEventListener("click",() => {
                removeTodos(todo);
                main.removeChild(note_div);
            });
          
    } 

    
    input.addEventListener("keyup",(e)=>{
        if (e.which ==13){
            addTodoList()
        }
    }) 

    add.addEventListener("click", (e)=>{
        e.preventDefault()
        addTodoList()
    })

    function saveTodos(todo){
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
    };

    function editTodos(todo){
        let todos
        todos = JSON.parse(localStorage.getItem('todos'));
        let index = todos.indexOf(todo)
        todos[index] = todo;
        localStorage.setItem('todos', JSON.stringify(todos))
    };

    function getTodos( ){
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.forEach(function(todo){
            const note_div = document.createElement('div');
             note_div.classList.add("notes");
        
            const note_el = document.createElement('input');
            note_el.classList.add('note');
            note_el.type = "text";
            note_el.value = todo
            note_el.setAttribute("readonly","readonly");
        
            const edit = document.createElement('button');
            edit.classList.add("edit");
            edit.innerHTML = "edit";
        
            const remove = document.createElement('button');
            remove.classList.add("delete");
            remove.innerHTML = "delete";
        
            
            main.appendChild(note_div);
            note_div.appendChild(note_el);
        
            const actions = document.createElement('div');
            actions.appendChild(edit);
            actions.appendChild(remove);
        
            note_div.appendChild(actions);
            input.value="";
        
            edit.addEventListener('click',() => {
                if(edit.innerText=="edit"){
                note_el.removeAttribute("readonly");
                note_el.focus()
                edit.innerText = "save";
                edit.classList.add("green");
                }else{
                    note_el.setAttribute("readonly","readonly");
                    edit.innerText = "edit";
                    edit.classList.remove("green");
                } ;
            });
        
            remove.addEventListener("click",() => {
                removeTodos(todo)
                main.removeChild(note_div);
            });
      
        });
        
    };


    function removeTodos(todo){
        if(window.confirm("Are you sure you want to delete?")){
            let todos;
            if(localStorage.getItem('todos') === null){
                todos = [];
            }else{
                todos = JSON.parse(localStorage.getItem('todos'));
            }
         
            todos.splice(todos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(todos));
    
        }
        
    };

    

});
    
/*
main=todo list
notediv=tododiv
noteel=newtodo

*/