import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Auto-Sync User Photo on Vite start/reload
function syncUserPhoto() {
  const possiblePaths = [
    'C:\\Users\\Saideep\\.gemini\\antigravity-ide\\brain\\5ce107d4-ca97-43ed-80cf-918a1f600c6b\\media__1785826581447.jpg',
    'C:\\Users\\Saideep\\.gemini\\antigravity-ide\\brain\\5ce107d4-ca97-43ed-80cf-918a1f600c6b\\media__1785824102055.jpg'
  ];

  const destPublic = path.resolve(__dirname, 'public/profile.jpg');
  const destSrc = path.resolve(__dirname, 'src/assets/profile.jpg');
  const destModule = path.resolve(__dirname, 'src/assets/profilePhoto.js');

  try {
    fs.mkdirSync(path.dirname(destPublic), { recursive: true });
    fs.mkdirSync(path.dirname(destSrc), { recursive: true });

    let foundPath = possiblePaths.find(p => fs.existsSync(p));

    if (foundPath) {
      const buf = fs.readFileSync(foundPath);
      fs.writeFileSync(destPublic, buf);
      fs.writeFileSync(destSrc, buf);

      const base64 = `data:image/jpeg;base64,${buf.toString('base64')}`;
      fs.writeFileSync(destModule, `export const ADITYA_PHOTO = ${JSON.stringify(base64)};\n`, 'utf-8');
      console.log('✅ Synchronized Aditya Gorde profile photo into public, src/assets, and profilePhoto.js!');
    }
  } catch (e) {
    console.error('Error syncing photo:', e);
  }
}

// Execute photo sync
syncUserPhoto();

// https://vite.config.js
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'sync-photo-plugin',
      buildStart() {
        syncUserPhoto();
      }
    }
  ],
  server: {
    port: 3000,
    host: true
  }
})
