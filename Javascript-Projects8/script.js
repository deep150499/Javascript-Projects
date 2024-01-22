const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
const notes = document.querySelectorAll('.input-box')


function updateNotes() {
    localStorage.setItem('notes',notesContainer.innerHTML);
}

function showData() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

createBtn.addEventListener('click',() => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click' , function(e) {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
    updateNotes();
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})

showData();