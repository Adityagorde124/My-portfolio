import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Saideep\\.gemini\\antigravity-ide\\brain\\5ce107d4-ca97-43ed-80cf-918a1f600c6b';
const possibleImages = [
  'media__1785826344469.jpg',
  'media__1785824102055.jpg'
];

const destPublic = path.resolve('public', 'profile.jpg');
const destSrc = path.resolve('src', 'assets', 'profile.jpg');

try {
  fs.mkdirSync(path.dirname(destPublic), { recursive: true });
  fs.mkdirSync(path.dirname(destSrc), { recursive: true });

  let foundSrc = null;
  for (const imgName of possibleImages) {
    const fullPath = path.join(brainDir, imgName);
    if (fs.existsSync(fullPath)) {
      foundSrc = fullPath;
      break;
    }
  }

  if (foundSrc) {
    fs.copyFileSync(foundSrc, destPublic);
    fs.copyFileSync(foundSrc, destSrc);
    
    // Also write Base64 module for instant zero-latency loading
    const imageBuffer = fs.readFileSync(foundSrc);
    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
    
    const profileModuleContent = `// Auto-generated photo module
export const PROFILE_IMAGE_BASE64 = ${JSON.stringify(base64Image)};
`;
    fs.writeFileSync(path.resolve('src', 'assets', 'profilePhoto.js'), profileModuleContent, 'utf-8');
    
    console.log('✅ Successfully copied photo to public/profile.jpg, src/assets/profile.jpg and generated profilePhoto.js!');
  } else {
    console.log('⚠️ Source image path not found.');
  }
} catch (err) {
  console.error('Error copying photo:', err);
}
