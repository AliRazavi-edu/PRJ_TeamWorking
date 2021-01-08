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
        <div class="container aos-init aos-animate text-center" data-aos="fade-up">

            <div class="section-title">
                <h2>پرداخت موفق</h2>
                <p>با تشکر از همراهی شما دوست عزیز</p>
            </div>

            <div class="row">
                <div class="alert alert-info" style="width: 100%">{{$message}}</div>
            </div>

            <div class="row text-center">
                <a href="{{route('welcome')}}" class="btn btn-info">صفحه اصلی</a>
            </div>
        </div>
    </section>
@endsection

