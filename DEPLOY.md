# Инструкция по развёртыванию на GitHub Pages

## 🚀 Быстрая настройка

### 1. Подготовка репозитория

1. Создайте репозиторий на GitHub (например, `aikb`)
2. Склонируйте репозиторий локально
3. Скопируйте все файлы проекта в репозиторий

### 2. Установка зависимостей

```bash
npm install
```

### 3. Локальная разработка

```bash
npm run docs:dev
```

Сайт будет доступен по адресу `http://localhost:8080/aikb/`

### 4. Сборка для продакшена

```bash
npm run docs:build
```

Собранные файлы будут в папке `.vuepress/dist/`

## 📦 Настройка GitHub Pages

### Вариант 1: Автоматический деплой через GitHub Actions (рекомендуется)

1. **Настройте workflow** (уже создан в `.github/workflows/deploy.yml`)

2. **Измените base в конфиге** (если нужно):
   - Откройте `.vuepress/config.js`
   - Измените `base: '/aikb/'` на `base: '/ваш-репозиторий/'` (если репозиторий не называется `aikb`)

3. **Создайте Personal Access Token (PAT)**:
   - Перейдите в Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Нажмите "Generate new token" → "Generate new token (classic)"
   - Название: `GitHub Pages Deploy` (или любое другое)
   - Срок действия: выберите нужный (выберите ограниченный срок по вашей политике доступа)
   - Права доступа (scopes):
     - ✅ `repo` (полный доступ к репозиториям)
     - Или минимально: ✅ `public_repo` (если репозиторий публичный)
   - Нажмите "Generate token"
   - **ВАЖНО**: Скопируйте токен сразу! Он показывается только один раз
   - Если потеряли токен, создайте новый

4. **Добавьте токен в Secrets репозитория**:
   - Перейдите в Settings → Secrets and variables → Actions
   - Нажмите "New repository secret"
   - Name: `PERSONAL_TOKEN` (именно так, как в workflow)
   - Secret: вставьте скопированный токен
   - Нажмите "Add secret"

5. **Включите GitHub Actions**:
   - Перейдите в Settings → Actions → General
   - Убедитесь, что Actions включены

6. **Настройте GitHub Pages**:
   - Перейдите в Settings → Pages
   - Source: выберите "Deploy from a branch", ветку `gh-pages` и `/ (root)`

7. **Сделайте коммит и пуш**:
   ```bash
   git add .
   git commit -m "Initial commit with VuePress"
   git push origin main
   ```

8. **Дождитесь деплоя**:
   - GitHub Actions автоматически соберёт и задеплоит сайт
   - Сайт будет доступен по адресу: `https://ваш-username.github.io/aikb/`

### Вариант 2: Ручной деплой через gh-pages ветку

1. **Установите gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Добавьте скрипт в package.json**:
   ```json
   "scripts": {
     "deploy": "npm run docs:build && gh-pages -d .vuepress/dist"
   }
   ```

3. **Задеплойте**:
   ```bash
   npm run deploy
   ```

4. **Настройте GitHub Pages**:
   - Settings → Pages
   - Source: выберите ветку `gh-pages` и папку `/ (root)`

## ⚙️ Настройка base URL

Если ваш репозиторий называется не `aikb`, измените `base` в `.vuepress/config.js`:

```javascript
module.exports = {
  base: '/ваш-репозиторий/', // замените на название вашего репозитория
  // ...
}
```

**Важно**: base должен начинаться и заканчиваться с `/`, и должен соответствовать названию репозитория.

## 🔧 Локальная разработка

### Запуск dev-сервера
```bash
npm run docs:dev
```

### Сборка для продакшена
```bash
npm run docs:build
```

### Предпросмотр собранного сайта
```bash
npm run docs:serve
```

## 📝 Обновление контента

1. Отредактируйте нужные `.md` файлы
2. Сделайте коммит и пуш:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. GitHub Actions автоматически задеплоит обновления

## 🐛 Решение проблем

### Сайт не открывается / 404 ошибка

- Проверьте, что `base` в `.vuepress/config.js` соответствует названию репозитория
- Убедитесь, что GitHub Actions успешно завершился
- Проверьте настройки GitHub Pages (Settings → Pages)

### GitHub Actions не запускается

- Убедитесь, что Actions включены в настройках репозитория
- Проверьте, что файл `.github/workflows/deploy.yml` существует
- Посмотрите логи в разделе Actions

### Локально не работает

- Убедитесь, что установлены все зависимости: `npm install`
- Проверьте версию Node.js (нужна 14+)
- Очистите кэш: удалите `node_modules` и `.vuepress/.cache`, затем `npm install`

## 📚 Полезные ссылки

- [VuePress документация](https://vuepress.vuejs.org/)
- [GitHub Pages документация](https://docs.github.com/pages)
- [GitHub Actions документация](https://docs.github.com/actions)
