@extends('layouts.react')

@section('content')
    <div id="app"></div>
@endsection

@section('scripts')
    <script>
        window.laravel = {};
        window.laravel.user = '{!! userForApi(true) !!}';
        window.laravel.env = {};
        window.laravel.env.name = '{{config('app.name')}}';
        window.laravel.env.baseUrl = '{{url('/')}}';
    </script>
    <script src="{{mix('js/app.js')}}"></script>
@endsection
