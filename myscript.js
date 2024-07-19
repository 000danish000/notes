const newnote = document.getElementById('addnote');
const maindiv = document.querySelector('.main');

function createNewNote() {
    const newnote = document.createElement('div');
    newnote.classList.add("notes");
    newnote.innerHTML = `<div class="toolbar">
                <i class="fas fa-save"></i>
                <i class="fas fa-trash"></i>
            </div>
            <textarea name="textarea" id="textarea"></textarea>`;
    maindiv.appendChild(newnote);
    newnote.querySelector('.fa-trash').addEventListener('click', () => {
        newnote.remove();
    })
    newnote.querySelector('.fa-save').addEventListener('click',()=>{

    })
}


newnote.addEventListener('click', () => {
    createNewNote();
});

const saveNote = ()=>{
    
}