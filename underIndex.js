// Take value
const productName = document.getElementById('productName')
let productQuantity = document.getElementById('productQuantity')
let productPrice = document.getElementById('productPrice')
// Take button
const addButton = document.getElementById('addProduct')
// Action -- add an event for addButton
let no = 1;
let total = 0;
addButton.addEventListener('click', function(){
    const productNameReal = productName.value;
    let productQuantityReal = parseInt(productQuantity.value);
    // Add the condition when the value is invalid
    while(productQuantityReal<=0){
        productQuantityReal = parseInt(prompt('Nhập lại số lượng sản phẩm lớn hơn 0',1))
    }
    let productPriceReal = parseFloat(productPrice.value);
    while(productPriceReal<=0){
        productPriceReal = parseFloat(prompt('Nhập lại giá sản phẩm lớn hơn 0',1000))
    }
    const subTotal = (productQuantityReal*productPriceReal);
    total+=subTotal;
    let addRow = "<tr>";
    addRow+="<td>"+no+"</td>";
    addRow+="<td>"+productNameReal+"</td>";
    addRow+="<td>"+productQuantityReal+"</td>";
    addRow+="<td>"+productPriceReal+"</td>";
    addRow+="<td>"+subTotal+"</td>";
    addRow+="</tr>"
    document.getElementById('tble').innerHTML += addRow;
    document.getElementById('totalValue').innerHTML = total;
    no++;
    productName.value = '';
    productQuantity.value = '';
    productPrice.value = '';
})
