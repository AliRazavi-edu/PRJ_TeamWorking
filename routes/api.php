<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->prefix('v1')->namespace('V1')->group(function () {
    Route::resource('admin/user', 'UserController');

    Route::get('courses', 'CourseController@index');
    Route::get('course/{course}/show', 'CourseController@show');
    Route::post('course/group/update', 'CourseController@updateGroup');
    Route::post('course/user/update', 'CourseController@updateUsers');
});
