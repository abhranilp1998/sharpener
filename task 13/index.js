// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    var userDetails = {
        'Username': document.getElementById("username").value,
        'Email': document.getElementById("email").value,
        'Phone': document.getElementById("phone").value
    };
    console.log(userDetails);
    //Storing
    // localStorage.setItem('User Details', JSON.parse(JSON.stringify(userDetails)));
    localStorage.setItem('User Details', JSON.stringify(userDetails));

}