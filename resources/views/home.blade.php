@extends('layouts.app')

@section('content')

{{--tailwind--}}

<div >
       <button class="btn-indigo">
           Click me
       </button>
   </div>
    <style>
        .btn-indigo {
            @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
        }
    </style>
{{--tailwind--}}

@endsection
