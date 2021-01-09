@extends('layouts.app')

@section('head')
    <style>
        #hero {
            width: 100%;
            height: 3vh;
            background: #37517e;
        }

        section {
            padding: 35px 0;
            overflow: hidden;
        }
    </style>
@endsection


@section('content')
    <section id="pricing" class="pricing">
        <div class="container aos-init aos-animate" data-aos="fade-up">

            <div class="section-title">
                <h2>بسته ها</h2>
                <p>شما می توانید با مبلغ ناچیز در هزینه نگهداری سیستم ما را یاری کنید. یکی از بسته های زیر را انتخاب کنید</p>
            </div>

            <div class="row">

                <div class="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div class="box">
                        <h3>حامی</h3>
                        <h4>۱۰,۰۰۰<span>تومان</span></h4>
                        <a href="#" class="buy-btn" onclick="event.preventDefault();
                                                     document.getElementById('pack-1').submit();">پرداخت</a>

                        <form id="pack-1" action="{{ route('donate.init') }}" method="POST" class="d-none">
                            @csrf
                            <input type="text" name="price" value="10000" hidden>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div class="box featured">
                        <h3>قهرمان</h3>
                        <h4>۳۰,۰۰۰<span>تومان</span></h4>
                        <a href="#" class="buy-btn" onclick="event.preventDefault();
                                                     document.getElementById('pack-3').submit();">پرداخت</a>

                        <form id="pack-3" action="{{ route('donate.init') }}" method="POST" class="d-none">
                            @csrf
                            <input type="text" name="price" value="30000" hidden>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div class="box">
                        <h3>دوست</h3>
                        <h4>۲۰,۰۰۰<span>تومان</span></h4>
                        <a href="#" class="buy-btn" onclick="event.preventDefault();
                                                     document.getElementById('pack-2').submit();">پرداخت</a>

                        <form id="pack-2" action="{{ route('donate.init') }}" method="POST" class="d-none">
                            @csrf
                            <input type="text" name="price" value="20000" hidden>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection

