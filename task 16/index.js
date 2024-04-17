function handleFormSubmit(event) {
    event.preventDefault();
    const UserDetails = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    
    localStorage.setItem(UserDetails.email, JSON.stringify(UserDetails));
    addToList(UserDetails);
}

function addToList(UserDetails) {
    const li = document.createElement("li");
    li.innerHTML = `Username: ${UserDetails.username} Email-${UserDetails.email} Phone-${UserDetails.phone} <button onclick="deleteItem(this,'${UserDetails.email}')">Delete</button> <button onclick="editItem(this,'${UserDetails.email}')">Edit</button>`;
    const list = document.querySelector("ul");
    list.appendChild(li);
}

function deleteItem(button,email){
    const liItem=button.parentNode;
    liItem.parentNode.removeChild(liItem);
    //local storage remove item
    localStorage.removeItem(email);
}
// module.exports=handleFormSubmit

function editItem(button,email) {
    var userData =JSON.parse(localStorage.getItem(email)) ; 
    const liItem=button.parentNode;
    liItem.parentNode.removeChild(liItem);
    //local storage remove item
    localStorage.removeItem(email);
    document.getElementById("username").value=userData.username;
    document.getElementById("email").value=userData.email;
    document.getElementById("phone").value=userData.phone;

}
