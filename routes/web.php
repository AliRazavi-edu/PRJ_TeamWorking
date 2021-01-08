<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'welcome'])->name('welcome');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['prefix' => 'donate'], function () {
    Route::get('/', "DonateController@index")->name('donate');
    Route::get('result/{type}', "DonateController@result")->name("donate.result");
    Route::post('init', "DonateController@init")->name("donate.init");
    Route::any('invoice', "DonateController@invoice")->name("donate.invoice");
});

Route::get('{all?}', [App\Http\Controllers\HomeController::class, 'index'])->where('all', '[a-zA-Z0-9-/]+');
