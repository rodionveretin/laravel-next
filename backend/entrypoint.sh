#!/bin/bash
set -e

# Если папка vendor пуста, установить зависимости
if [ ! -d "vendor" ] || [ -z "$(ls -A vendor)" ]; then
    echo "Installing composer dependencies..."
    composer install --prefer-dist --no-interaction --no-suggest --optimize-autoloader
fi

# Запуск миграций (опционально)
# php artisan migrate --force

# Запуск команды, переданной через CMD
exec "$@"
