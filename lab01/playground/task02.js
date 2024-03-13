const fs = require('fs');

const filePath = 'C:\\Users\\user\\sandbox\\task02.txt';
const newLine = 'Hello world ';

let existingContent = '';
try {
  existingContent = fs.readFileSync(filePath, 'utf-8');
} catch (error) {
}

const updatedContent = existingContent + '\n' + newLine;

fs.writeFileSync(filePath, updatedContent, 'utf-8');

console.log('New line added to the file.');
