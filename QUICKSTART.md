# 🚀 Быстрый старт

## Локальная разработка

```bash
# 1. Установите зависимости
npm install

# 2. Запустите dev-сервер
npm run docs:dev

# 3. Откройте браузер
# Сайт будет доступен по адресу: http://localhost:8080/aikb/
```

## Деплой на GitHub Pages

### Первый раз

1. **Создайте репозиторий на GitHub** (например, `aikb`)

2. **Измените base URL** (если репозиторий называется не `aikb`):
   - Откройте `.vuepress/config.js`
   - Измените `base: '/aikb/'` на `base: '/ваш-репозиторий/'`

3. **Измените ссылку на GitHub** в `.vuepress/config.js`:
   ```javascript
   { text: 'GitHub', link: 'https://github.com/ваш-username/ваш-репозиторий' }
   ```

4. **Запушьте код**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ваш-username/ваш-репозиторий.git
   git push -u origin main
   ```

5. **Создайте Personal Access Token**:
   - Перейдите в GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Нажмите "Generate new token (classic)"
   - Название: `GitHub Pages Deploy`
   - Права: выберите `repo` (или `public_repo` для публичных репозиториев)
   - Нажмите "Generate token"
   - **Скопируйте токен** (показывается только один раз!)

6. **Добавьте токен в Secrets**:
   - В репозитории: Settings → Secrets and variables → Actions
   - New repository secret
   - Name: `PERSONAL_TOKEN`
   - Secret: вставьте скопированный токен
   - Add secret

7. **Настройте GitHub Pages**:
   - Перейдите в Settings → Pages
   - Source: выберите "Deploy from a branch", ветку `gh-pages` и `/ (root)`
   - Сохраните

8. **Дождитесь деплоя**:
   - GitHub Actions автоматически соберёт и задеплоит сайт
   - Сайт будет доступен по адресу: `https://ваш-username.github.io/ваш-репозиторий/`

### Обновление контента

Просто делайте коммиты и пушьте в `main`:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions автоматически задеплоит обновления!

## Структура проекта

```
aikb/
├── README.md              # Главная страница (входная точка)
├── index.md               # База знаний (основной контент)
├── DEPLOY.md              # Подробная инструкция по деплою
├── package.json           # Зависимости и скрипты
├── .vuepress/             # Конфигурация VuePress
│   ├── config.js          # Основная конфигурация
│   └── public/            # Статические файлы
├── topics/                # Карточки тем
├── tools/                 # Карточки инструментов
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions workflow
```

## Полезные команды

```bash
# Разработка
npm run docs:dev          # Запуск dev-сервера

# Сборка
npm run docs:build        # Сборка для продакшена

# Предпросмотр
npm run docs:serve        # Предпросмотр собранного сайта
```

## Решение проблем

### Permission denied (403 ошибка)

Если видите ошибку `Permission to ... denied`:

1. **Проверьте, что токен создан правильно**:
   - Убедитесь, что токен имеет права `repo` (или `public_repo`)
   - Проверьте, что токен не истёк

2. **Проверьте, что токен добавлен в Secrets**:
   - Settings → Secrets and variables → Actions
   - Должен быть секрет с именем `PERSONAL_TOKEN` (именно так!)
   - Если нет — создайте новый

3. **Перезапустите workflow**:
   - Actions → выберите failed workflow → Re-run all jobs

### Сайт не открывается / 404

- Проверьте `base` в `.vuepress/config.js` — должен соответствовать названию репозитория
- Убедитесь, что GitHub Actions успешно завершился
- Проверьте настройки GitHub Pages

### GitHub Actions не запускается

- Убедитесь, что Actions включены в настройках репозитория
- Проверьте, что файл `.github/workflows/deploy.yml` существует
- Посмотрите логи в разделе Actions

Подробнее в [DEPLOY.md](./DEPLOY.md) и [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
