<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

///////////////////////////////////////////////
Route::middleware('admin')->group(function (){
    Route::get('admin/dashboard', [AdminController::class, 'dashboard']);
});

Route::prefix('admin')->group(function (){
    Route::get('/login', [AdminController::class, 'login']);
    Route::post('/login-submit', [AdminController::class, 'login_submit']);
    Route::get('/logout', [AdminController::class, 'logout']);
    
    Route::get('/list', [AdminController::class, 'adminList']);
    Route::get('/view/{id}', [AdminController::class, 'adminView']);
    Route::get('/create', [AdminController::class, 'createAdmin']);
    Route::post('/create', [AdminController::class, 'storeAdmin']);  
});

/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
Route::middleware('student')->group(function (){
    Route::get('student/dashboard', [StudentController::class, 'dashboard']);
});

Route::prefix('student')->group(function (){
    Route::get('/login', [StudentController::class, 'login']);
    Route::get('/logout', [StudentController::class, 'logout']);
    Route::post('/login-submit', [StudentController::class, 'login_submit']);

    Route::get('/list', [StudentController::class, 'studentList']);
    Route::get('/view/{id}', [StudentController::class, 'studentView']);
    Route::get('/create', [StudentController::class, 'createStudent']);
    Route::post('/create', [StudentController::class, 'storeStudent']);

    ////----

});
/////////////////////////////////////////////////////////////////
Route::group(function (){

});