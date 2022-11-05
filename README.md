# Capstone Project: SHOES CYBER
<div align="center">
Project realizes functions calling APIs <br>
</div>

## LINK DEMO
<div align="center">

[Click vào đây để xem chi tiết](https://corvisionv6.surge.sh/)

</div>

## VIDEO DEMO
<div align="center">

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/wXwULGS4HiQ/0.jpg)](https://youtu.be/wXwULGS4HiQ)

</div>

## HÌNH ẢNH DEMO
<p align="center">
<img src="https://github.com/macmie2411999/-Assignment-LS10_SHOES_API/blob/0ea2c83e18aaafbac20b175006be59fd27771d22/images/imagePreview.png"></img>
</p>

## THÀNH VIÊN
Nhóm gồm 1 thành viên: Cao Đức Mạnh (MacMie) <br>
## BASE
```scss
// Base 
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
```

## HEADER
```html
<!-- HEADER -->
    <header class="header fixed-top">
        <div class="container_header">

            <!-- NAVBAR 1 -->
            <nav class="navbar1 navbar-expand-lg bg-light bg-transparent">
                <div class="container-navbar1">
                    <!-- LOGO -->
                    <div class="content-navbar1">
                        <div class="logo-company">
                            <img class="logoImage" src="./images/imageLogo.png">
                        </div>

                        <div class="loginRegister mb-2 mb-lg-0">
                            <img class="imageCart" src="./images/imageCart.png">
                            <p class="numberProductIncart">(1)</p>
                            <a class="gotoLogin" href="#">Login</a>
                            <a class="gotoRegister" href="register.html">Register</a>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- NAVBAR 2-->
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Men</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Woman</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Kid</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Sport</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- HEADER END -->
```
    
## FOOTER
```html
<!-- FOOTER -->
    <footer class="footer">
        <div class="footer_embrace ">
            <div class="footer_container ">
                <div class="row first_row">
                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column">GET HELP</h6>

                        <p class="content_contact_us mb-2"> Contact us </p>
                        <p class="content_shopping mb-2"> Shopping </p>
                        <p class="content_nikeid mb-2"> NIKEID </p>
                        <p class="content_nike+ mb-2"> Nike+ </p>
                    </div>

                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column"> ORDERS </h6>

                        <p class="content_payment_options mb-2"> Payment options </p>
                        <p class="content_shipping_and_delivery mb-2"> Shipping and delivery </p>
                        <p class="content_returns mb-2"> Returns </p>
                    </div>

                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column"> REGISTER </h6>

                        <p class="content_register mb-2">
                            Create one account to manage everything you do with Nike, from your shopping, preferences to
                            your Nike+ activity. </p>
                        <p class="content_learn_more mb-2"><a href="register.html">Learn more</a></p>
                    </div>
                </div>

                <div class="row second_row">
                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column">EMAIL SIGN UP</h6>

                        <p class="content_contact_info mb-2">
                            Be the first to know about new products and special offers. </p>
                        <p class="content_sign_up_now mb-2"><a href="#">Sign up now</a></p>
                    </div>

                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column"> GIFT CARDS </h6>

                        <p class="content_contact_info mb-2">
                            Give the gift that always fits. </p>
                        <p class="content_sign_up_now mb-2"><a href="#">View cards</a></p>
                    </div>

                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column"> STORES NEAR YOU </h6>

                        <p class="content_contact_info mb-2">
                            Locate a Nike retail store of authorized retailer. </p>
                        <p class="content_sign_up_now mb-2"><a href="#">Search</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- FOOTER END -->
```
