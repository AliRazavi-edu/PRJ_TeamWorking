@extends('layouts.app')

@section('top-content')
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                 data-aos="fade-up" data-aos-delay="200">
                <h1>گروه بندی آسان</h1>
                <h2>گروه بندی هیچ وقت این قدر آسان نبود</h2>
                <div class="d-lg-flex">
                    @guest
                        <a href="{{route('login')}}" class="btn-get-started scrollto">شروع</a>
                    @else
                        <a href="{{route('home')}}" class="btn-get-started scrollto">پنل</a>
                    @endguest
                </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img src="assets/img/hero-img.png" class="img-fluid animated" alt="">
            </div>
        </div>
    </div>
@endsection

