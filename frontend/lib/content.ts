import fs from 'fs/promises';
import path from 'path';

export async function getContent(fileName: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${fileName}.json`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading content file ${fileName}:`, error);
    return null;
  }
}
