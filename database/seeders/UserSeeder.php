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

            $lessonIds = Lesson::query()
                ->inRandomOrder()
                ->limit(rand(1, 5))
                ->get()
                ->pluck('id')
                ->toArray();

            /** @var User $record */
            $record->lessons()->syncWithoutDetaching($lessonIds);
        });
    }
}
