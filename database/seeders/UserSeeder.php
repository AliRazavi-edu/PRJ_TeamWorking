<?php

namespace Database\Seeders;

use App\Models\Lesson;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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

        User::factory(20)->create()->each(function ($record) {
            /** @var User $record */

            if ($record->is_admin)
                return;

            $lessonIds = Lesson::query()
                ->inRandomOrder()
                ->limit(rand(1, 5))
                ->get()
                ->pluck('id')
                ->toArray();

            if ($record->is_teacher) {
                /** @var User $record */
                $record->teacherLessons()->syncWithoutDetaching($lessonIds);
            } elseif ($record->is_user) {
                /** @var User $record */
                $record->lessons()->syncWithoutDetaching($lessonIds);
            }

        });
    }
}
