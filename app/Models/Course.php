<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string title
 * @property int study_field_id
 * @property int teacher_id
 * @property int lesson_id
 * @property boolean is_ended
 * Class Course
 * @package App\Models
 */
class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'study_field_id',
        'teacher_id',
        'lesson_id',
        'is_ended'
    ];

    protected $casts = [
        'is_ended' => 'boolean'
    ];

    public function studyField()
    {
        return $this->belongsTo(StudyField::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_course');
    }

    public function scopeNotEnded($query)
    {
        return $query->where('is_ended', '!=', 0);
    }

}
