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
        Schema::create('posts', function (Blueprint $table) {
            Schema::disableForeignKeyConstraints();

            $table->id();
            $table->string('title');
            $table->text('excerpt')->nullable();
            $table->json('content')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('banner')->nullable();
            $table->enum('status', ['publish', 'archive', 'private', 'pending']);
            $table->char('category', 255)->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('category')->references('slug')->on('posts_categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
