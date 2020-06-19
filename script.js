
var arr = []
var counter = 0;

function addItem() {
    var obj = { name: 'Name' + (counter + 1) + '', email: 'email' + (counter + 1) + '@email.com' }
    arr.push(obj);
    counter++;
    populateList();
}

function populateList() {
    var list = document.getElementById('list');
    var listArray = [];
    for (var i = 0; i < arr.length; i++) {
        var elem = '<tr id="li_' + i + '">' +
            '<td> <span class="name">' + arr[i].name + '</span> </td>' +
            '<td> <span class="email">' + arr[i].email + '</span> </td>' +
            '<td> <button onclick="deleteItem(this,' + i + ')" class="btn mr1 my1 cursor-pointer">Delete</button>' +
            '<button onclick="viewDetails(this, ' + i + ' )" class="btn cursor-pointer">View Details</button> </td> </tr>';
        listArray.push(elem);
    }
    var combinedList = listArray.join(" ")
    list.querySelector('tbody').innerHTML = combinedList;
}

function deleteItem(elem, i) {
    if (arr.length > 1) {
        arr.splice(i, 1);
        populateList();
    } else {
        alert('You cannot delete last row');
    }

}

function viewDetails(item, index) {
    var modal = document.getElementById("modal");
    modal.innerHTML = '<form>' +
        '<div>Name: <input id="name-details" type="text" value="' + arr[index].name + '" /></div>' +
        '<div>Email: <input id="email-details" type="email" value="' + arr[index].email + '" /></div>' +
        '<div><button type="button" onclick="saveDetails(' + index + ')" class="btn cursor-pointer">Save</button></div>' +
        '</form>';
    document.getElementById("overlay").style.display = 'block';
}

function saveDetails(index) {
    var name = document.getElementById("name-details").value;
    var email = document.getElementById("email-details").value;
    arr[index] = { name: name, email: email };
    closeModal();
    populateList();
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.innerHTML = '';
    document.getElementById("overlay").style.display = 'none';
}