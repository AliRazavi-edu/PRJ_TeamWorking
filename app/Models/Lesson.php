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
        'name'
    ];

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
