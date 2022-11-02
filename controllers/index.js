var token_cybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";

// iife: khai bao xong goi ham luon
(function getAllMovieApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        // data: body,
        headers: {
            TokenCybersoft: token_cybersoft
        },
    })

    promise.then(function (res) {
        console.log(res.data.content);
        renderMoviedCard(res.data.content);
    })

    promise.catch(function (err) {
        console.log(err);
    })
})();

// Chuyen link qua detail.html voi tham so maphim co gia tri la movie.maPhim

function renderMoviedCard(arrMovie) {
    var contentHTML = '';
    for (var i = 0; i < arrMovie.length; i++) {
        var movie = arrMovie[i];
        contentHTML += `
        <div class="col-4 mt-2">
                    <div class="card">
                        <img src="${movie.hinhAnh}" alt="..." class="w-100" height="450" style="object-fit: cover;"/>
                        <div class="card-body">
                            <p>${movie.tenPhim}</p>
                            <p style="height: 65px;">${movie.moTa.length > 100 ? movie.moTa.substr(0,100) + '...' : movie.moTa}</p>
                            <a class="btn btn-dark" href="./detail.html?maphim=${movie.maPhim}">Xem Chi Tiet</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('movie-list').innerHTML = contentHTML;
}