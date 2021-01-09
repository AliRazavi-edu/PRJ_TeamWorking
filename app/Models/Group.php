<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property int lesson_id
 * @property string name
 * @property int limit
 *
 * Class User
 * @package App\Models
 */
class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'lesson_id',
        'name',
        'limit'
    ];

}
