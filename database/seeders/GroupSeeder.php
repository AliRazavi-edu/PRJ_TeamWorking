<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::query()->inRandomOrder()->exists())
            $this->call([UserSeeder::class]);

        if (!Course::query()->inRandomOrder()->exists())
            $this->call([CourseSeeder::class]);

        Group::factory(100)->make()->each(function ($record) {
            /** @var Course $course */
            $course = Course::query()->inRandomOrder()->first();

            /** @var Group $record */
            $record->course_id = $course->id;

            $record->save();
            if (rand(0, 1)) {
                $userIds = $course->users()
                    ->userRole()
                    ->inRandomOrder()
                    ->take(rand(1, $record->limit))
                    ->get()
                    ->pluck('id')
                    ->toArray();
                $record->users()->syncWithoutDetaching($userIds);
            }

        });
    }
}
