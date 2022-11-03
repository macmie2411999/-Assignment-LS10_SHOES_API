// -by MacMie

let token_cybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
let valid = true;

// Call API to get array products
(function getAllShoesApi() {

    var urlParams = new URLSearchParams(window.location.search);
    let idChoosenShoes = urlParams.get('idShoes');

    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idChoosenShoes}`,
        method: 'GET'
    })

    promise.then(function (res) {
        let choosenShoes = res.data.content;
        console.log(choosenShoes);
        
        renderShoesToDetailProduct(choosenShoes, renderShoesSize(choosenShoes.size));
        renderShoesToProductFeature(choosenShoes.relatedProducts);
    })

    promise.catch(function (err) {
        console.log(err);
    })
})();

function addToCart () {
    let productInCart = parseInt(document.querySelector('.numberProductIncart').innerHTML);
    let inputQuantities = parseInt(document.querySelector('.input-quantity').value);
    console.log(document.querySelector('.input-quantity').value);
    document.querySelector('.numberProductIncart').innerHTML = productInCart + inputQuantities;
}

// Functions handle Events

function addProduct(){
    console.log("addProduct clicked");
    let inputQuantities = parseInt(document.querySelector('.input-quantity').value);
    document.querySelector('.input-quantity').value = inputQuantities + 1;
}

function removeProduct(){
    console.log("removeProduct clicked");
    let inputQuantities = parseInt(document.querySelector('.input-quantity').value);
    if(inputQuantities > 1){
        inputQuantities -= 1;
    }
    document.querySelector('.input-quantity').value = inputQuantities;
}

// Functions Render HTML

function renderShoesToProductFeature(arrayShoes) {
    let contentHTML = '';
    for (let shoes of arrayShoes) {
        contentHTML += `
        <div class="col">
            <div class="card">
                <img src="${shoes.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${shoes.name}</h5>
                    <p class="card-text">${shoes.shortDescription}</p>
                </div>
                <div class="card-footer">
                    <button class="button-buy-now"> <a href="../detail.html?idShoes=${shoes.id}">Buy now</a></button>
                    <button class="tag-price">${shoes.price}</button>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('product_features').innerHTML = contentHTML;
}


function renderShoesToDetailProduct(shoes, sizeArrayHtml) {
    let contentHTML = '';
    contentHTML += `
        <div class="image-container col-md-6">
            <img class="shoes-image" src="${shoes.image}" />
        </div>

        <div class="col-md-6">
            <div class="product-information">
                <div class="product-information-container">
                    <div class="product-name">${shoes.name}</div>
                    <p class="product-description">${shoes.description}</p>

                    <div class="product-size">
                        <span>Available size</span>
                        <div class="size-list col-md-12">
                            ${sizeArrayHtml}
                        </div>
                    </div>
                    <div class="product-price"><span>${shoes.price}</span></div>
                    <div class="product-count">
                        <div class="quantity-product display-flex">
                            <button class="count-button minus-count" onclick="removeProduct()">-</button>
                            <input type="text" name="quantity" value="1" class="input-quantity">
                            <button class="count-button plus-count" onclick="addProduct()">+</button>
                        </div>
                        <button class="button-to-cart" id="button-to-cart" onclick="addToCart()"><a href="#" class="round-black-btn">Add to Cart</a></button>
                    </div>
                </div>
            </div>
        </div>
        `;
    document.getElementById('detail-choosen-shoes').innerHTML = contentHTML;
}


function renderShoesSize(arraySize) {
    let contentHTML = '';
    for (let size of arraySize) {
        contentHTML += `
            <button class="button-size btn btn-danger">${size}</button>
        `;
    }
    return contentHTML;
}