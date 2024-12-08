<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('library', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->json('content')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('banner')->nullable();
            $table->enum('status', ['publish', 'archive', 'private', 'pending', 'trash']);
            $table->char('category', 255)->nullable();

            $table->foreign('category')->references('slug')->on('library_categories');

            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library');
    }
};
