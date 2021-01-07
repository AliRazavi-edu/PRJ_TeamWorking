<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    public function studyFields()
    {
        return $this->belongsToMany(StudyField::class,'study_field_teacher');
    }

    public function lessons()
    {
        return $this->belongsToMany(Lesson::class,'teacher_lesson');
    }
}
