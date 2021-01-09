<?php

namespace Database\Seeders;

use App\Models\StudyField;
use Illuminate\Database\Seeder;

class StudyFieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        StudyField::factory(10)->create();
    }
}
