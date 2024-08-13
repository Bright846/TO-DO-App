const inputBox = document.querySelector('.search-input');
const btn = document.querySelector('.add-text');
const list = document.querySelector('.list-container');

function addTask(){

    if(inputBox.value ===''){
        alert('Please enter a task');
    }
    else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    saveData()
    }
    inputBox.value = '';
}

list.addEventListener('click', (e) =>{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");    
        saveData()    
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }    
}, false);

function saveData(){
    localStorage.setItem('data', list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem('data');
}

btn.addEventListener('click', addTask);
showData();