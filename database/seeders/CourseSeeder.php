<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\StudyField;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!StudyField::query()->inRandomOrder()->exists())
            $this->call([StudyFieldSeeder::class]);

        if(!Teacher::query()->inRandomOrder()->exists())
            $this->call([TeacherSeeder::class]);

        if(!Lesson::query()->inRandomOrder()->exists())
            $this->call([LessonSeeder::class]);


        Course::factory(30)->make()->each(function ($record){
            /** @var Course $record */
            $record->study_field_id = StudyField::query()->inRandomOrder()->first()->id;
            $record->teacher_id = Teacher::query()->inRandomOrder()->first()->id;
            $record->lesson_id = Lesson::query()->inRandomOrder()->first()->id;
            $record->save();
        });
    }
}
