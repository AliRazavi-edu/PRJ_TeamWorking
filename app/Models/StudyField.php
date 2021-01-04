<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyField extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class,'user_study_field');
    }
}
