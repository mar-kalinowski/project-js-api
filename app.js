const addPostForm = document.forms.addPostForm;
const addTitle = addPostForm.title;
const addText = addPostForm.content;
const addAuthor = addPostForm.author;
const addDate = addPostForm.author;
const newPostBtn = document.querySelector('.newPostBtn')
const submit = document.querySelector('.submit')
const update = document.querySelector('.update')

update.disabled = true;

newPostBtn.addEventListener('click', () => {
    dialog.open = true;
})