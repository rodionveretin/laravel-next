<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('settings')->insert([
            'slug'  => 'title',
            'type'  => 'text',
            'title'   => 'Заголовок',
        ]);
        DB::table('settings')->insert([
            'slug'  => 'subtitle',
            'type'  => 'text',
            'title'   => 'Подзаголовок',
        ]);
        DB::table('settings')->insert([
            'slug'  => 'desc',
            'type'  => 'textarea',
            'title'   => 'Описание',
        ]);
        DB::table('settings')->insert([
            'slug'  => 'mos_id_apikey',
            'type'  => 'text',
            'title'   => 'Ключ apidata.mos.ru',
        ]);
        DB::table('settings')->insert([
            'slug'  => 'metrics',
            'type'  => 'textarea',
            'title'   => 'Метрики',
        ]);
    }
}
