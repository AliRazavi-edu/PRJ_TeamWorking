<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string name
 * @property string description
 *
 * Class Lesson
 * @package App\Models
 */
class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description'
    ];

    public function teachers()
    {
        return $this->belongsToMany(Teacher::class, 'teacher_lesson');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_lesson');
    }

    public function groups()
    {
        return $this->hasMany(Group::class);
    }
}
