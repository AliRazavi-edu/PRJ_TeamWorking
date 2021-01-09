<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyField extends Model
{
    use HasFactory;

    public function teachers()
    {
        return $this->belongsToMany(User::class,'study_field_teacher','study_field_id','teacher_id');
    }
}
