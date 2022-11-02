var token_cybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
// Viet lai ham call API

// Cach 1: promise - axios
// ( function getMoVieDetail() {
//     // Lay link va bien ve Object
//     var urlParams = new URLSearchParams(window.location.search);

//     // Tu object lay gia tri cua bien maphim
//     console.log(urlParams.get('maphim'));

//     var promise = axios({
//         url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=' + urlParams.get('maphim'),
//         method: 'GET',
//         // data: body,
//         headers: {
//             TokenCybersoft: token_cybersoft
//         },
//     })

//     promise.then(function (res) {
//         console.log(res.data.content);
//         renderMoviedCard(res.data.content);
//         document.title = res.data.content.tenPhim;
//     })

//     promise.catch(function (err) {
//         console.log(err);
//     })
// })();

// iife: khai bao xong goi ham luon

// Chuyen link qua detail.html voi tham so maphim co gia tri la movie.maPhim
function renderMoviedCard(movie) {
    var contentHTML = '';
    contentHTML += `
        <div class="col-4">
                <img id="movie-hinhAnh" src="${movie.hinhAnh}" alt="..." class="w-100" height="450">
            </div>
            <div class="col-8">
                <h3 id="movie-tenPhim">${movie.tenPhim}</h3>
                <p id="movie-moTa">${movie.moTa}</p>
                <p>...</p>
            </div>
        `;
    document.getElementById('movie-list').innerHTML = contentHTML;
}

// JS là ngôn ngữ đơn luồng fifo, chạy từ trên xuống, nhưng một số hàm bất đồng bộ (call api,..) thì được web-api (đa luồng) xử lý
// Sử dụng async và await để buộc bất đồng bộ về đồng bộ (đa luông về đơn luồng)
// event loop
// V8 engine

// Cach 2: async await
(async function getMoVieDetail() {
    // Lay link va bien ve Object
    var urlParams = new URLSearchParams(window.location.search);

    // Tu object lay gia tri cua bien maphim
    var maPhim = urlParams.get('maphim');
    console.log(urlParams.get('maphim'));

    try{
        var res = await axios({
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
            method: 'GET',
            // data: body,
            headers: {
                TokenCybersoft: token_cybersoft
            },
        });

        console.log(res.data.content);
        var film = res.data.content;
        document.querySelector('#movie-hinhAnh').innerHTML = film.hinhAnh;
        document.querySelector('#movie-tenPhim').innerHTML = film.tenPhim;
        document.querySelector('#movie-moTa').innerHTML = film.moTa;
    } catch(e){
        console.log(err);
    }
})();