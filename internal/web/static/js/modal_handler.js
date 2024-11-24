document.addEventListener('DOMContentLoaded', function() {
    editRow()
    newRow()
});

function editRow(){
    const editRow = document.getElementById('editRow');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');
    
    editRow.addEventListener('click', function(event) {
        event.preventDefault();  
        modal.setAttribute('open', ''); 
        fillRowDropdown()
    });
 
    closeModalButton.addEventListener('click', function() {
        modal.removeAttribute('open'); 
        clearRowDropdown()
    });
}

function newRow(){
    const editRow = document.getElementById('newRow');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');
    const rowDropdown = document.getElementById('row-dropdown');
    
    editRow.addEventListener('click', function(event) {
        event.preventDefault();  
        modal.setAttribute('open', ''); 
        rowDropdown.style.display = 'none';
    });
 
    closeModalButton.addEventListener('click', function() {
        modal.removeAttribute('open'); 
        rowDropdown.style.display = 'block';
    });
}

function fillRowDropdown(){
    const rows = document.querySelectorAll('.proxy-rows');
    const dropdownList = document.getElementById('dropdown-list');

    rows.forEach(function(row) {
        const path = row.querySelector('.client-request-path')
        const method = row.querySelector('.method')

        console.log(path)
        console.log(method)

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = "Method: " + method.textContent + " | Path: " + path.textContent;  

        li.appendChild(a);
        dropdownList.appendChild(li);
    });

}

function clearRowDropdown(){
    const dropdownList = document.getElementById('dropdown-list');
    
    while (dropdownList.firstChild) {
        dropdownList.removeChild(dropdownList.firstChild);
    }
}