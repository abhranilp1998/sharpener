// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //select the input
    const fruitToAdd = document.getElementById('fruit-to-add');
    //creating li
    const newLi = document.createElement('li');
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';
    // const newLiText=document.createTextNode(fruitToAdd.value);
    // newLi.appendChild(newLiText);
    // newLi.className='fruit';
    // //create delete button and add to li
    // const deleteBtn=document.createElement('button');
    // const deleteBtnText=document.createTextNode('X');
    // deleteBtn.appendChild(deleteBtnText);
    // deleteBtn.className='delete-btn';
    // newLi.appendChild(deleteBtn);
    //add li as the last element of ul
    fruits.appendChild(newLi);
})

fruits.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})

//edit btn for newly added items

fruits.querySelectorAll('li').forEach(li => {
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    li.appendChild(editBtn);
});