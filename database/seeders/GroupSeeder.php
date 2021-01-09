<?php

namespace Database\Seeders;

use App\Models\Group;
use App\Models\Lesson;
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
        if (!Lesson::query()->inRandomOrder()->exists())
            $this->call([LessonSeeder::class]);

        if (!User::query()->inRandomOrder()->exists())
            $this->call([UserSeeder::class]);

        Group::factory(100)->make()->each(function ($record) {
            /**
             * @var Lesson $lesson
             * @var Group $record
             */
            $lesson = Lesson::query()->inRandomOrder()->first();

            $record->lesson_id = $lesson->id;

            $record->save();

            if (!$record->limit)
                return;

            $limit = rand(0, $record->limit);

            if (!$limit)
                return;

            $userIds = User::query()
                ->inRandomOrder()
                ->limit($limit)
                ->get()
                ->pluck('id')
                ->toArray();

            $record->users()->syncWithoutDetaching($userIds);

        });
    }
}
