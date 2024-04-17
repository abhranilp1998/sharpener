const fruitDescription = document.createElement('input');
fruitDescription.setAttribute('type', 'text');
fruitDescription.setAttribute('name', 'fruit-description');
fruitDescription.setAttribute('id', 'fruit-description');
fruitDescription.setAttribute('placeholder', 'Description:');

const submitBtn = document.querySelector('form button[type="submit"]');
submitBtn.parentNode.insertBefore(fruitDescription, submitBtn);

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
// console.log(fruits);
const abc = document.getElementsByClassName('fruits');
// console.log(abc)
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const descriptionToAdd = document.getElementById('fruit-description');

    const newFruit = document.createElement('li');
    const newDescription = document.createElement('p');
    newDescription.innerHTML = `<i>${descriptionToAdd.value}</i>`;
    newFruit.innerText = fruitToAdd.value;
    newFruit.appendChild(newDescription);
    fruits.appendChild(newFruit);

    fruitToAdd.value = '';
    descriptionToAdd.value = '';

})


const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event) {
    event.preventDefault();
    const filterValue = event.target.value.toLowerCase();

    const items = document.getElementsByClassName("fruit");
    console.log("Filter Value:", filterValue);
    for (let i = 0; i < items.length; i++) {
        const currFruitText = items[i].textContent.toLowerCase();
        const descriptionValue = document.getElementById("fruit-description").value.toLowerCase();
        console.log("Current Fruit Text:", currFruitText);
        console.log("Description Value:", descriptionValue);

        if (currFruitText.includes(filterValue) || descriptionValue.includes(filterValue)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
});