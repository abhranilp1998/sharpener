// Add input element inside form, before button, to take fruit description

const fruitDescription = document.createElement('input');
fruitDescription.setAttribute('type', 'text');
fruitDescription.setAttribute('name', 'fruit-description');
fruitDescription.setAttribute('id', 'fruit-description');
fruitDescription.setAttribute('placeholder', 'Description:');

const submitBtn = document.querySelector('form button[type="submit"]');
submitBtn.parentNode.insertBefore(fruitDescription, submitBtn)

// Show the fruit description in italics on the next line
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.createElement('p');
    const descriptionvalue = fruitDescription.value;
    description.innerHTML = `<i>${descriptionvalue}</i> `;
    form.appendChild(description);
    fruitDescription.value = '';
})

//Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event) {
    event.preventDefault();
    const filterValue = event.target.value.toLowerCase();

    const items = document.getElementsByClassName("fruit");
    // console.log(items, filterValue);
    for (let i = 0; i < items.length; i++) {
        const currFruitText = items[i].childNodes[0].textContent.toLowerCase();
        const descriptionvalue = document.getElementById("fruit-description").value.toLowerCase();
        //description!!!
        if ((currFruitText.indexOf(filterValue) === -1) || (descriptionvalue.indexOf(filterValue) === -1)) {
            items[i].style.display = "none";
            console.log(currFruitText + "" + filterValue);

        }
    }
});

// const filter = document.getElementById("filter");
// filter.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     const filterValue = event.target.value.toLowerCase();

//     const items = document.getElementsByClassName("fruit");
//     console.log("Filter Value:", filterValue);
//     for (let i = 0; i < items.length; i++) {
//         const currFruitText = items[i].textContent.toLowerCase();
//         const descriptionValue = document.getElementById("fruit-description").value.toLowerCase();
//         console.log("Current Fruit Text:", currFruitText);
//         console.log("Description Value:", descriptionValue);

//         if (currFruitText.includes(filterValue) || descriptionValue.includes(filterValue)) {
//             items[i].style.display = "block";
//         } else {
//             items[i].style.display = "none";
//         }
//     }
// });