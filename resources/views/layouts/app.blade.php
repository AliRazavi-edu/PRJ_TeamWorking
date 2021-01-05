<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Favicons -->
    <link href="assets/img/favicon.ico" rel="icon">

    <link href="assets/css/bootstrap-rtl.min.css" rel="stylesheet">

    <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
    <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">

    <link href="assets/css/fonts.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/custom.css" rel="stylesheet">

</head>
<body>

<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

        <nav class="nav-menu d-none d-lg-block">
            <ul>
                @guest
                    @if (Route::has('login'))
                        <li @if(routeIs('login')) class="active" @endif><a href="{{ route('login') }}">{{ __('Login') }}</a></li>
                    @endif
                    @if (Route::has('register'))
                        <li @if(routeIs('register')) class="active" @endif><a href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                    @endif
                @else
                    <li>
                        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                    </li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                @endguest
            </ul>
        </nav>

        <h1 class="logo mr-auto">
            <a href="{{route('welcome')}}">{{ config('app.name', 'Laravel') }}</a>
        </h1>

        @auth
            <a href="{{route('home')}}" class="get-started-btn scrollto">پنل</a>
        @endauth
    </div>
</header>
<section id="hero" class="d-flex align-items-center">
    @yield('top-content')
</section>
<main id="main">
    @yield('content')
</main>

<footer id="footer">

    <div class="footer-top">
        <div class="container">
            <div class="row">

            </div>
        </div>
    </div>

    <div class="container footer-bottom clearfix">
        <div class="copyright">
            &copy; Copyright. All Rights Reserved
        </div>
        <div class="credits">
            Designed by <a href="https://bootstrap.com/">Bootstrap</a>
        </div>
    </div>
</footer>

<a href="#" class="back-to-top">
    <i class="ri-arrow-up-line"></i>
</a>

<div id="preloader"></div>

<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>
<script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/venobox/venobox.min.js"></script>
<script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>

<script src="assets/js/main.js"></script>
@yield('scripts')
</body>
</html>
