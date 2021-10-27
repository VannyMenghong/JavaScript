/*ខ្ញុំប្រើប្រាស់Modal សម្រាប់បង្ហាញនូវ item ដែលបាន​ select:
   ទី១​ ះ​  ទាយទិន្នន័យពី item (detail,icon)តាម​​ការបង្កើត class-name 1 ហើយយើងប្រើ ​ e.target 
   ដើម្បីចាប់យក parentElement ហើយខ្ញុំងអាចប្រើ querySelector(i)& (p)​ ដែលតាងដោយ var detail,var icon
   បន្ទាប់មក​យើងបង្កើត var modal =`បង្កើតដើម្បើបង្ហាយលើmodal <div class=".... add-cart-${i}"> 
<button class=" ... delete${i}" onclick="deteletItem(${i})" >Delete this item</button> `  
 output var modal to Class modal(modal-item)
append(detail,icon) to modal
    */

var item = document.getElementsByClassName("item");

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', addItemCart);
}

function addItemCart(ev) {
    var child = ev.target;
    var item = child.parentElement;
    var detail = item.querySelector("p");
    var icon = item.querySelector("i");
    i = i + 1; //id for item-cart start from 1 , but item start from 0(index)

    var modal; //this modal is use to write program and design item that add to modal-item
    /*modal = `<div class="d-flex  justify-content-between add-cart-${i} ">
            <button class="btn btn-danger btn-sm deleteId${i}" oclick="deleteItem(${i});">Delete item</button></div> `*/
    modal = `<div class=" my-2 d-flex justify-content-between  bg-warning text-dark add-cart-${i} p-2" >
            <button class="btn btn-sm btn-danger deleteId${i}" onclick="deleteItem(${i})" id="deleteId-${i}">Delete form cart</button>
        </div>`
    var add = document.getElementsByClassName("modal-item")[0].innerHTML += modal;
    document.getElementsByClassName("add-cart-" + i)[0].append(detail, icon)
}

//delete Function
function deleteItem(id) {
    document.getElementsByClassName("deleteId" + id)[0].parentElement.remove();
}