<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * @property int id
 * @property int role
 * @property string name
 * @property string family
 * @property string full_name
 * @property string display_name
 * @property string email
 * @property string student_number
 * @property string api_token
 * @property boolean is_admin
 * @property boolean is_user
 * Class User
 * @package App\Models
 */
class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role',
        'name',
        'family',
        'full_name',
        'display_name',
        'email',
        'student_number',
        'password',
        'api_token',
    ];

    protected $appends = [
        'full_name',
        'display_name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'user_course');
    }

    public function groups()
    {
        return $this->belongsToMany(Group::class, 'group_user')->withTimestamps(['joined_at']);
    }

    public function scopeUserRole($query)
    {
        return $query->where('role', 'user');
    }

    public function scopeAdminRole($query)
    {
        return $query->where('role', 'admin');
    }

    public function getIsAdminAttribute()
    {
        return $this->role == 'admin';
    }

    public function getIsUserAttribute()
    {
        return $this->role == 'user';
    }

    public function getFullNameAttribute()
    {
        if (!empty($this->name) && !empty($this->family))
            return $this->name . ' ' . $this->family;

        return null;
    }

    public function getDisplayNameAttribute()
    {
        switch (true) {
            case !empty($this->full_name):
                return $this->full_name;
            case !empty($this->name):
                return $this->name;
            case !empty($this->family):
                return $this->family;
            case !empty($this->email):
                return $this->email;
            default:
                return null;
        }
    }

    public function hasThisCourse(Course $course)
    {
        return $this->courses()->where('id', $course->id)->exists();
    }
}
