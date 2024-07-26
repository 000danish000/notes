const newnote = document.getElementById('addnote');
const maindiv = document.querySelector('.main');



const saveNote = ()=>{
    const notes = document.querySelectorAll('.notes #textarea');
    const data = [];
    notes.forEach((n)=>{
        if (!(n.value=="")) {
            data.push(n.value);            
        }
            
            
        })
    
            localStorage.setItem("notes",JSON.stringify(data));

}

function createNewNote(text="") {
    const newnote = document.createElement('div');
    newnote.classList.add("notes");
    newnote.innerHTML = `<div class="toolbar">
                <i class="fas fa-save"></i>
                <i class="fas fa-trash"></i>
            </div>
            <textarea name="textarea" id="textarea">${text}</textarea>`;
    maindiv.appendChild(newnote);

    newnote.querySelector('.fa-trash').addEventListener('click', () => {
        newnote.remove();
        saveNote();
    })
    newnote.querySelector('.fa-save').addEventListener('click',()=>{
        saveNote();
    })
    newnote.querySelector('#textarea').addEventListener('focusout',()=>{
        saveNote();
    })
}


newnote.addEventListener('click', () => {
    createNewNote();
});


(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes == 0){
            createNewNote();

        }else{
            lsnotes.forEach((ls) => {
                createNewNote(ls);
            })
    

        }
    }
)()


