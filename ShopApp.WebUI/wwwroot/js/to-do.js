const form = document.getElementById('addTaskForm');
const input = document.getElementById('txtTaskName');
const btnDeleteAll = document.getElementById('btnDeleteAll');
const taskList = document.getElementById('task-list');
let items;


// load items
loadItems();

// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);

    //search items
    selectElement('searchInput').addEventListener('keyup',searchInput);
}

//load all items from LS
function loadItems() {
 
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

// get items from Local Storage
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// set item to Local Storage
function setItemToLS(text) {
    items = getItemsFromLS();
    
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

// delete item from LS
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}


// Create Item start

function createItem(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i style="float:right" class="fa fa-times mt-1"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);


}

// Create Item end


// Add new item start

function addNewItem(e) {
    if (input.value.trim() === '') {
        alert('Add new task');
    }

    // create item
    if (input.value.trim() !== "") {
        createItem(input.value);
    }


    // save to LS
    if(input.value.trim()){
        setItemToLS(input.value);
    }
   

    // clear input
    input.value = '';

    e.preventDefault();

}

// Add new item end


// Delete an item start

function deleteItem(e) {
    if (e.target.className === 'fa fa-times mt-1') {
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            // delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

// Delete an item end


// Delete all items Start

function deleteAllItems(e) {

    if (confirm('The whole list will be deleted are you sure ?')) {
        // taskList.innerHTML='';
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}

// Delete all items end


//Return selector

function selectElement(selector) {
    return document.getElementById(selector)
}

// Clear searched item list 

function clearSearchedValue(){
    selectElement("searched-list").innerHTML="";
}


//search items 
function searchInput() {

    items = getItemsFromLS();
   

    let search = selectElement('searchInput').value;

    clearSearchedValue()

    if(search.length > 0){

        for (let i = 0; i < items.length; i++) {
            if (items[i].toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
               
                selectElement("searched-list").innerHTML +=`
                <li class="list-group-item list-group-item-secondary">${items[i]}</li>
                `;
                
    
            }
        }

    }

   
   
}

