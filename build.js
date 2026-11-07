import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const files = ['index.html', 'styles.css', 'app.js', 'data.js', 'vercel.json'];
for (const file of files) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(distDir, file));
  }
}

console.log('Build succeeded: Static assets prepared for deployment.');
