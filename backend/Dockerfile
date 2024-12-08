# backend/Dockerfile
FROM php:8.2-fpm

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Установка PHP расширений
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Установка рабочей директории
WORKDIR /var/www/html

# Копирование всех файлов приложения
COPY . .

# Установка прав для папок storage и bootstrap/cache
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Установка зависимостей через Composer
RUN composer install --optimize-autoloader --no-dev

# Экспонирование порта для PHP-FPM
EXPOSE 9000

# Запуск PHP-FPM
# CMD ["php-fpm"]

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=9000"]