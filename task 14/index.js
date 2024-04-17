function handleFormSubmit(event) {
    event.preventDefault();
    var userDetails = {
        'Username': document.getElementById("username").value,
        'Email': document.getElementById("email").value,
        'Phone': document.getElementById("phone").value
    };
    console.log(userDetails);


    // var existingEntries = JSON.parse(localStorage.getItem('UserDetails')) || [];
    // existingEntries.push(userDetails);

    // console.log(existingEntries);

    localStorage.setItem(userDetails.Email, JSON.stringify(userDetails));

    addEntryToList(userDetails);

}

function addEntryToList(userDetails) {
    const ul = document.getElementById("userEntries");
    ul.innerHTML = ul.innerHTML + `<li>${userDetails.Username} - ${userDetails.Email} - ${userDetails.Phone}</li>`
        // console.log(1 + 1);
        // console.log(("addEntryToList Method" + " : " + userDetails));
}
// module.exports = handleFormSubmit;