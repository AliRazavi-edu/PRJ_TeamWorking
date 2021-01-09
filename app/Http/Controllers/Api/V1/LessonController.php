<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\StudyField;
use App\Models\User;
use App\Models\UserLesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /** @var User $user */
        $user = auth()->user();

        if ($user->is_teacher) {
            $query = $user->teacherLessons();
        } else {
            $query = $user->lessons();
        }

        $lessons = $query->latest()->select(['id', 'name', 'description'])->get();

        return response($lessons);
    }

    public function show(Lesson $lesson)
    {
        /** @var User $user */
        $user = auth()->user();

        if (!$user->isLessonBelongsToUser($lesson))
            return abort(404);

        /** @var UserLesson $userLesson */
        $userLesson = UserLesson::query()
            ->where('lesson_id', $lesson->id)
            ->where('user_id', $user->id)
            ->first();

        $teacher = $userLesson->teacher()->first();

        $studyField = $userLesson->studyField()->first();

        $users = $lesson->users()->whereDoesntHave('groups')->latest()->get();

        $groups = $lesson->groups()->latest()->with(['users'])->get();


        return response([
            'lesson' => $lesson,
            'teacher' => $teacher,
            'study_field' => $studyField,
            'users' => $users,
            'groups' => $groups,
        ]);
    }
}
