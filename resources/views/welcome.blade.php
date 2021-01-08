@extends('layouts.app')

@section('top-content')
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                 data-aos="fade-up" data-aos-delay="200">
                <h1>گروه بندی آسان</h1>
                <h2>گروه بندی هیچ وقت این قدر آسان نبود</h2>
                <p style="color: #FFFFFF">شما می توانید با مبلغ ناچیز در هزینه نگهداری سیستم ما را یاری کنید. هم اکنون دکمه دونیت را فشار دهید</p>
                <div class="d-lg-flex">
                    <a href="{{route('donate')}}" class="btn-get-started scrollto">دونیت کنید</a>
                </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img src="/assets/img/hero-img.png" class="img-fluid animated" alt="">
            </div>
        </div>
    </div>
@endsection

