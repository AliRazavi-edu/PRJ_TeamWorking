<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string name
 *
 * Class Teacher
 * @package App\Models
 */
class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
      'name'
    ];

    public function studyFields()
    {
        return $this->belongsToMany(StudyField::class,'study_field_teacher');
    }

    public function lessons()
    {
        return $this->belongsToMany(Lesson::class,'teacher_lesson');
    }
}
