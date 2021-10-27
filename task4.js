let addItem = document.getElementsByClassName("add-item");

for (var i = 0; i < addItem.length; i++) {
    addItem[i].addEventListener('click', addItemCart);
}

function addItemCart(e) {
    var child = e.target;
    var product = child.parentElement;
    var detail = product.querySelector("p");
    var icon = product.querySelector("i");

    i = i + 1
    modal = `<div class=" my-0 d-flex justify-content-between  text-dark add-cart-${i}" id=''>
            <button class="btn btn-sm btn-danger deleteId${i}" onclick="deleteItem(${i})" id="deleteId-${i}">Delete form cart</button>
        </div>`

    var add = document.getElementsByClassName("model-get-value")[0].innerHTML += modal;
    document.getElementsByClassName("add-cart-" + i)[0].append(detail, icon);
}

function deleteItem(value) {
    document.getElementsByClassName("deleteId" + value)[0].parentElement.remove();
}