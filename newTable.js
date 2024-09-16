const productNameInput = document.querySelector('#productName');
const productQuantityInput = document.querySelector('#productQuantity');
const productPriceInput = document.querySelector('#productPrice');
const addButton = document.querySelector('#addItem');
let no = 1;
let newTotalPrice = 0;

addButton.addEventListener('click', () => {
    const productName = productNameInput.value;
    const productQuantity = parseInt(productQuantityInput.value);
    const productPrice = parseFloat(productPriceInput.value);

    // Check condition
    if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
        const subTotal = (productQuantity * productPrice);
        newTotalPrice += subTotal;

        // Create new Row
        const newRow = `
            <tr>
                <td>${no}</td>
                <td>${productName}</td>
                <td>${productQuantity}</td>
                <td>${productPrice}</td>
                <td>${subTotal}</td>
            </tr>
        `;

        const tbBody = document.querySelector('.tbl tbody');
        tbBody.innerHTML += newRow;
        document.querySelector('#totalPrice').textContent = newTotalPrice;
        no++;
        productNameInput.value = '';
        productQuantityInput.value = '';
        productPriceInput.value = '';
    } else {
        alert('Please complete all information before adding');
    }
});