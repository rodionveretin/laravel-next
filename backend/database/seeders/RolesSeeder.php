<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            'slug' => 'admin',
            'name' => 'Администратор',
        ]);
        DB::table('roles')->insert([
            'slug' => 'moderator',
            'name' => 'Редактор',
        ]);
        DB::table('roles')->insert([
            'slug' => 'teacher',
            'name' => 'Учитель',
        ]);
        DB::table('roles')->insert([
            'slug' => 'mentor',
            'name' => 'Наставник',
        ]);
        DB::table('roles')->insert([
            'slug' => 'user',
            'name' => 'Пользователь',
        ]);
    }
}
