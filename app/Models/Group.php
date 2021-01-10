<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property int course_id
 * @property string title
 * @property int limit
 * Class Group
 * @package App\Models
 */
class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'title',
        'limit',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'group_user')->withPivot([
            'is_leader',
            'is_final',
        ])->withTimestamps(['joined_at']);
    }
}
