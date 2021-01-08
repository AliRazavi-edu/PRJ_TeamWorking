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

        User::factory(20)->create()->each(function ($record){

            $lesson = Lesson::query()->inRandomOrder()->first();

            /** @var User $record */
            $record->lessons()->syncWithoutDetaching([$lesson->id]);
        });
    }
}
