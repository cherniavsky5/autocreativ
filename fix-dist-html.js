import fs from 'fs';
import path from 'path';

// Функция для обработки HTML-файлов
function processHtmlFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`❌ Ошибка чтения ${filePath}:`, err);
      return;
    }

    // Убираем crossorigin и исправляем пути
    const updatedHtml = data
      .replace(/crossorigin/g, '') // Удаляем crossorigin
      .replace(/(href|src)="\/([^"]+)"/g, '$1="$2"'); // Делаем пути относительными

    // Перезаписываем файл
    fs.writeFile(filePath, updatedHtml, 'utf8', (err) => {
      if (err) {
        console.error(`❌ Ошибка записи ${filePath}:`, err);
      } else {
        console.log(`✅ Исправлен файл: ${filePath}`);
      }
    });
  });
}

// Рекурсивно находим все HTML-файлы в папке dist
function processHtmlFilesInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`❌ Ошибка чтения папки ${dir}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`❌ Ошибка получения информации о файле ${filePath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          processHtmlFilesInDir(filePath); // Рекурсивно обрабатываем подпапки
        } else if (file.endsWith('.html')) {
          processHtmlFile(filePath); // Обрабатываем HTML-файл
        }
      });
    });
  });
}

// Запускаем обработку HTML-файлов в dist/
const distPath = path.resolve('dist');
processHtmlFilesInDir(distPath);
