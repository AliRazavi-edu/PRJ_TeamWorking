<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    public function teachers()
    {
        return $this->belongsToMany(Teacher::class,'teacher_lesson');
    }

    public function users()
    {
        return $this->belongsToMany(User::class,'user_lesson');
    }
}
