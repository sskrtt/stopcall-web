import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current date and time in KST (Korea Standard Time)
const currentDateTime = new Date().toLocaleString('ko-KR', {
  timeZone: 'Asia/Seoul',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).replace(/\./g, '-').replace(' ', '').replace('오전', 'AM').replace('오후', 'PM');

// Path to the .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFilePath = path.resolve(__dirname, '../.env');

// Read the .env file or create a new one if it doesn't exist
let envContent = '';
if (fs.existsSync(envFilePath)) {
  envContent = fs.readFileSync(envFilePath, 'utf8');
}

// Update or add the VITE_APP_LAST_MODIFIED_DATE variable
const updatedEnvContent = envContent
  .split('\n')
  .filter((line) => !line.startsWith('VITE_APP_LAST_MODIFIED_DATE='))
  .concat(`VITE_APP_LAST_MODIFIED_DATE=${currentDateTime}`)
  .join('\n');

// Write the updated content back to the .env file
fs.writeFileSync(envFilePath, updatedEnvContent, 'utf8');

console.log(`Updated VITE_APP_LAST_MODIFIED_DATE to ${currentDateTime}`);