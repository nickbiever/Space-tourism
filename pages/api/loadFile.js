import fsPromises from 'fs/promises';
import path from 'path';

export async function loadFile(file) {
  const filePath = path.join(process.cwd(), file);
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}