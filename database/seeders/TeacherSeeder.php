<?php

namespace Database\Seeders;

use App\Models\StudyField;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!StudyField::query()->inRandomOrder()->exists())
            $this->call([StudyFieldSeeder::class]);

        Teacher::factory(20)->create()->each(function ($record){
            $studyField = StudyField::query()->inRandomOrder()->first();

            /** @var Teacher $record */
            $record->studyFields()->syncWithoutDetaching([$studyField->id]);
        });

    }
}
