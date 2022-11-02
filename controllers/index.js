// import {
//     Shoes
// } from "../models/Shoes.js";

let token_cybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
let valid = true;

// Call API to get array products
(function getAllShoesApi() {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })

    promise.then(function (res) {
        let arrayShoes = res.data.content;
        // arrayShoes.push(res.data.content);
        console.log(arrayShoes);
        renderShoesToCarousel(arrayShoes);
        renderShoesToProductFeature(arrayShoes);

    })

    promise.catch(function (err) {
        console.log(err);
    })
})();

// (async function getAllShoesApi() {
//     // Lay link va bien ve Object
//     var urlParams = new URLSearchParams(window.location.search);

//     try {
//         var res = await axios({
//             url: 'https://shop.cyberlearn.vn/api/Product',
//             method: 'GET'
//         });

//         let arrayShoes = res.data.content;

//         console.log(arrayShoes);
//         renderShoesToCarousel(arrayShoes);
//     } catch (e) {
//         console.log(err);
//     }
// })();

// Chuyen link qua detail.html voi tham so maphim co gia tri la movie.maPhim

function renderShoesToCarousel(arrayShoes) {
    // console.log(arrayShoes);
    let contentHTML = '';
    for (let shoes of arrayShoes) {
        // console.log(shoes);

        if (shoes.id === 1) {
            contentHTML += `
            <div class="carousel-item active">
                        <img src="${shoes.image}" alt="...">

                        <div class="card_home">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${shoes.name}</h5>
                                    <p class="card-text">${shoes.description}</p>
                                    <button href="#" class="btn btn-primary"><a>Buy now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        } else {
            contentHTML += `
            <div class="carousel-item">
                        <img src="${shoes.image}" alt="...">

                        <div class="card_home">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${shoes.name}</h5>
                                    <p class="card-text">${shoes.description}</p>
                                    <button href="" class="btn btn-primary"><a>Buy now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        }
    }
    document.getElementById('carousel-shoes').innerHTML = contentHTML;
}

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
                <button class="button-buy-now"> <a>Buy now</a></button>
                <button class="tag-price">${shoes.price}</button>
            </div>
        </div>
    </div>
        `;
    }
    document.getElementById('product_features').innerHTML = contentHTML;
}


// function renderShoesToCarouselDemo(arrayShoes) {
//     for (let shoes of arrayShoes) {
//         document.querySelector('#image-shoes').innerHTML = shoes.image;
//         document.querySelector('#card-title').innerHTML = shoe.name;
//         document.querySelector('#card-text').innerHTML = shoes.description;
//     }
// }