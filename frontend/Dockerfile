# frontend/Dockerfile

FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json/yarn.lock
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование остальных файлов приложения
COPY . .

# Установка переменной окружения по умолчанию
ENV NODE_ENV=production

# Установка прав на выполнение скрипта entrypoint
RUN ["chmod", "+x", "./entrypoint.sh"]

# Экспонирование порта
EXPOSE 3000

# Запуск приложения через entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
