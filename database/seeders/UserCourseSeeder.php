<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!Course::query()->inRandomOrder()->exists())
            $this->call([CourseSeeder::class]);

        if(!User::query()->inRandomOrder()->exists())
            $this->call([UserSeeder::class]);

        $courses = Course::query()->get();

        /** @var Course $course */
        foreach ($courses as $course){
            $userIds = User::query()->inRandomOrder()->take(rand(5,15))->get()->pluck('id')->toArray();

            $course->users()->syncWithoutDetaching($userIds);
        }
    }
}
