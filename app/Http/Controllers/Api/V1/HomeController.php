<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\StudyField;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getLessons()
    {
        /** @var User $user */
        $user = auth()->user();

        if ($user->is_admin) {
            $query = Lesson::query()->latest()->select(['id', 'name', 'description'])->get();
        } elseif ($user->is_teacher) {
            $query = $user->teacherLessons();
        } else {
            $query = $user->lessons();
        }

        $lessons = $query->latest()->select(['id', 'name', 'description'])->get();

        return response($lessons);
    }

}
