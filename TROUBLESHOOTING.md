# Решение проблем с деплоем

## Проблема: Permission denied (403 ошибка)

Если вы видите ошибку:
```
remote: Permission to USERNAME/REPO.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/USERNAME/REPO.git/': The requested URL returned error: 403
```

### Решение:

1. **Перейдите в настройки репозитория**:
   - Settings → Actions → General

2. **Настройте права доступа для Workflow**:
   - Найдите раздел "Workflow permissions"
   - Выберите **"Read and write permissions"** (не "Read repository contents and packages permissions")
   - Поставьте галочку **"Allow GitHub Actions to create and approve pull requests"**
   - Нажмите "Save"

3. **Проверьте настройки GitHub Pages**:
   - Settings → Pages
   - Source: должен быть выбран **"GitHub Actions"** (не "Deploy from a branch")

4. **Перезапустите workflow**:
   - Перейдите в Actions
   - Найдите последний failed workflow
   - Нажмите "Re-run all jobs"

## Проблема: Сайт не открывается / 404 ошибка

### Проверьте:

1. **Base URL в конфиге**:
   - Откройте `.vuepress/config.js`
   - Убедитесь, что `base: '/название-репозитория/'` соответствует названию вашего репозитория
   - Base должен начинаться и заканчиваться с `/`

2. **Настройки GitHub Pages**:
   - Settings → Pages
   - Убедитесь, что выбрано "GitHub Actions"
   - Проверьте, что деплой прошёл успешно (зелёная галочка в Actions)

3. **Подождите несколько минут**:
   - GitHub Pages может обновляться с задержкой до 10 минут

## Проблема: GitHub Actions не запускается

### Проверьте:

1. **Actions включены**:
   - Settings → Actions → General
   - Убедитесь, что Actions не отключены

2. **Файл workflow существует**:
   - Проверьте, что файл `.github/workflows/deploy.yml` существует
   - Убедитесь, что он закоммичен в репозиторий

3. **Ветка правильная**:
   - Workflow настроен на ветки `main` и `master`
   - Убедитесь, что вы пушите в правильную ветку

## Проблема: Локальная сборка не работает

### Решение:

1. **Установите зависимости**:
   ```bash
   npm install
   ```

2. **Проверьте версию Node.js**:
   ```bash
   node --version
   ```
   Нужна версия 14 или выше

3. **Очистите кэш**:
   ```bash
   rm -rf node_modules .vuepress/.cache
   npm install
   ```

4. **Проверьте ошибки**:
   ```bash
   npm run docs:build
   ```
   Посмотрите на ошибки в выводе

## Проблема: Сайт работает, но ссылки не работают

### Решение:

1. **Проверьте base URL**:
   - В `.vuepress/config.js` должен быть правильный `base`
   - Если репозиторий называется `my-repo`, то `base: '/my-repo/'`

2. **Проверьте относительные ссылки**:
   - В Markdown файлах используйте относительные пути
   - Например: `[ссылка](./topics/what-is-ai.md)` вместо абсолютных

## Проблема: Изменения не появляются на сайте

### Решение:

1. **Проверьте, что изменения закоммичены**:
   ```bash
   git status
   git add .
   git commit -m "Update content"
   git push
   ```

2. **Проверьте Actions**:
   - Перейдите в Actions
   - Убедитесь, что workflow запустился и завершился успешно

3. **Подождите**:
   - GitHub Pages обновляется с задержкой
   - Попробуйте очистить кэш браузера (Ctrl+Shift+R)

## Дополнительная помощь

Если проблема не решена:

1. Проверьте логи в GitHub Actions
2. Посмотрите документацию VuePress: https://vuepress.vuejs.org/
3. Проверьте документацию GitHub Pages: https://docs.github.com/pages
4. Создайте issue в репозитории с описанием проблемы
