let notes = [];
let editNoteIndex = 0;
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
    document.querySelector('.add-note-ui').classList.add('hidden');
    document.querySelector('.edit-note-ui').classList.add('hidden');
    if(localStorage.getItem("notes")) {
        notes = JSON.parse(localStorage.getItem("notes"));
        const listNodeUINode = document.querySelector('.list-note-ui');
        listNodeUINode.querySelector('ul').innerHTML='';
        listNodeUINode.classList.remove('hidden');
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const li = document.createElement('li');
            li.innerHTML = `<div class="note-item">
  <div>
    <h5>${note.title}</h5><p>${note.content}</p>
  </div>
  <div>
   <button onclick="showEditNoteForm(${i})" class="btn-edit">Sửa</button>
    <button onclick="deleteNote(${i})" class="btn-delete">Xóa</button>
  </div>
</div>`;
            const ul = listNodeUINode.querySelector('ul');
            ul.append(li);
        }
    }
}
function showEditNoteForm(index){
    document.querySelector('.edit-note-ui').classList.remove('hidden');
    document.querySelector('.add-note-ui').classList.add('hidden');
    document.querySelector('.list-note-ui').classList.add('hidden');
    const note = notes[index];
    document.querySelector('.edit-note-ui .title').value = note.title;
    document.querySelector('.edit-note-ui .content').value = note.content;
    editNoteIndex = index;
}

function updateNote(){
    const title = document.querySelector('.edit-note-ui .title').value;
    const content = document.querySelector('.edit-note-ui .content').value;
    const note = {
        title:title,
        content:content
    }
    notes[editNoteIndex] = note;
    localStorage.setItem("notes",JSON.stringify(notes));
    document.querySelector('.edit-note-ui .title').value = "";
    document.querySelector('.edit-note-ui .content').value = "";
    displayListNote();
}

function deleteNote(index){
    const c = confirm("Bạn chắc chắn muốn xóa");
    if(c){
        //tiến hành xóa
        notes.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notes));
        displayListNote();
    }
}
displayListNote();

function clearAll() {
    const c = confirm("Bạn chắc chắn muốn xóa hết");
    if(c){
        notes = [];
        localStorage.setItem("notes",JSON.stringify(notes));
        displayListNote();
    }
}