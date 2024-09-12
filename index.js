// Button
const sell = document.getElementById('sell')
const cancel = document.getElementById('cancel')
// Value
const productName = document.getElementById('productName');
const unitPrice = document.getElementById('unitPrice');
const quantity = document.getElementById('quantity');
const discount = document.getElementById('discount');
let id = 2;
sell.addEventListener('click', function(){
    const productNameReal = productName.value;
    const unitPriceReal = parseFloat(unitPrice.value);
    const quantityReal = parseInt(quantity.value)
    const discountReal = parseInt(discount.value)
    const discountAmount = ((unitPriceReal*quantityReal)*discountReal)/100;
    const total = parseFloat((unitPriceReal*quantityReal)-discountAmount);
    let addRow = "<tr>";
    addRow += "<td>" + id + "</td>";
    addRow += "<td>" + productNameReal + "</td>";
    addRow += "<td>" + quantityReal + "</td>";
    addRow += "<td>" +"$"+ unitPriceReal + "</td>";
    addRow += "<td>" + discountReal +"</td>";
    addRow += "<td>" + "$"+total + "</td>";
    addRow += "</tr>";
    document.getElementById('tble').innerHTML += addRow;
    id++;
    // Hide the value when add finish
    productName.value = ''
    unitPrice.value = ''
    quantity.value = ''
    discount.value = ''
})