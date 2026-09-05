import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const texPath = resolve(root, 'resume/Jose-Resume.tex');
const pdfPath = resolve(root, 'public/Jose-Resume.pdf');

const content = await readFile(texPath, 'utf8');
const response = await fetch('https://latex.ytotech.com/builds/sync', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/pdf',
  },
  body: JSON.stringify({
    compiler: 'pdflatex',
    resources: [{ main: true, content }],
  }),
});

const buffer = Buffer.from(await response.arrayBuffer());
const type = response.headers.get('content-type') ?? '';

if (!response.ok || !type.includes('pdf')) {
  throw new Error(
    `LaTeX compile failed (${response.status}): ${buffer.toString('utf8').slice(0, 2000)}`
  );
}

await writeFile(pdfPath, buffer);
console.log(`Wrote ${pdfPath} (${buffer.length} bytes)`);
