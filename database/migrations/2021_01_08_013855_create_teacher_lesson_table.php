<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeacherLessonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacher_lesson', function (Blueprint $table) {
            $table->primary(['teacher_id', 'lesson_id']);

            $table->unsignedBigInteger('teacher_id');
            $table->unsignedBigInteger('lesson_id');

            $table->foreign('teacher_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('lesson_id')->references('id')->on('lessons')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teacher_lesson');
    }
}
