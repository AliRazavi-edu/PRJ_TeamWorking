<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudyFieldTeacherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_field_teacher', function (Blueprint $table) {
            $table->primary(['study_field_id', 'teacher_id']);

            $table->unsignedBigInteger('study_field_id');
            $table->unsignedBigInteger('teacher_id');

            $table->foreign('study_field_id')->references('id')->on('study_fields')->onDelete('cascade');
            $table->foreign('teacher_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('study_field_teacher');
    }
}
