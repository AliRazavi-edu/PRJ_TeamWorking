<?php

namespace Database\Seeders;

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
        \App\Models\StudyField::factory(10)->create();
    }
}
