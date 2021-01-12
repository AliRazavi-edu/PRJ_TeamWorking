<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Group;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CourseController extends Controller
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

        $courses = $user->courses()->notEnded()->latest()->get();

        $response = [];

        /** @var Course $course */
        foreach ($courses as $course) {
            $response[] = [
                'id' => $course->id,
                'title' => $course->title,
                'study_field' => $course->studyField()->first()->title,
                'teacher' => $course->teacher()->first()->name,
                'lesson' => $course->lesson()->first()->title,
            ];
        }

        return response($response);
    }

    public function show(Course $course)
    {
        if ($course->is_ended)
            return abort(404);

        /** @var User $user */
        $user = auth()->user();

        if (!$user->hasThisCourse($course))
            return abort(404);

        $groups = Group::query()->where('course_id', $course->id)->with([
            'users' => function ($q) {
                $q->select([
                    'id',
                    'name',
                    'family',
                    'email'
                ])->orderBy('group_user.joined_at','asc');
            }
        ])->get();

        $groupIds = $groups->pluck('id')->toArray();

        $users = $course->users()->whereDoesntHave('groups', function ($q) use ($groupIds) {
            $q->whereIn('id', $groupIds);
        })->select([
            'id',
            'name',
            'family',
            'email',
        ])->latest()->get();

        $studyField = $course->studyField()->first();
        $teacher = $course->teacher()->first();
        $lesson = $course->lesson()->first();

        return response([
            'course' => $course,
            'lesson' => $lesson,
            'teacher' => $teacher,
            'studyField' => $studyField,
            'users' => $users,
            'groups' => $groups,
        ]);
    }

    public function updateGroup(Request $request)
    {
        /**
         * @var Group $srcGroup
         * @var Group $desGroup
         * @var User $user
         */
        $srcGroup = Group::query()->find($request->input('srcGroupId'));
        $desGroup = Group::query()->find($request->input('destinationGroupId'));
        $user = Group::query()->find($request->input('userId'));

        $srcGroup->users()->detach([$user->id]);
        $desGroup->users()->syncWithoutDetaching([$user->id]);

        return response([],200);
    }

    public function updateUsers(Request $request)
    {
        /**
         * @var Group|null $srcGroup
         * @var Group|null $desGroup
         * @var User $user
         */
        $srcGroup = $request->has('srcGroupId') ? Group::query()->find($request->input('srcGroupId')) : null;
        $desGroup = $request->has('destinationGroupId') ? Group::query()->find($request->input('destinationGroupId')) : null;
        $user = Group::query()->find($request->input('userId'));

        if(!empty($srcGroup)){
            $srcGroup->users()->detach([$user->id]);
        }elseif (!empty($desGroup)){
            $desGroup->users()->syncWithoutDetaching([$user->id]);
        }

        return response([],200);
    }
}
