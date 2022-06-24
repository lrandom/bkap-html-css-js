let notes = [];
function showAddNoteForm() {
    document.querySelector('.add-note-ui').classList.remove('hidden');
    document.querySelector('.list-note-ui').classList.add('hidden');
}

function saveNote() {
    const title = document.querySelector('.add-note-ui .title').value;
    const content = document.querySelector('.add-note-ui .content').value;
    const note = {
        title: title,
        content: content
    }
    document.querySelector('.add-note-ui .title').value = "";
    document.querySelector('.add-note-ui .content').value = "";
    notes.push(note);
    localStorage.setItem("notes",JSON.stringify(notes));
    displayListNote();
    document.querySelector('.add-note-ui').classList.add('hidden');
    return false;
}

function displayListNote(){
    if(localStorage.getItem("notes")) {
        notes = JSON.parse(localStorage.getItem("notes"));
        const listNodeUINode = document.querySelector('.list-note-ui');
        listNodeUINode.classList.remove('hidden');
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const li = document.createElement('li');
            li.innerHTML = `<h5>${note.title}</h5><p>${note.content}</p>`;
            const ul = listNodeUINode.querySelector('ul');
            ul.append(li);
        }
    }
}

displayListNote();