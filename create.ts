import * as fs from 'fs';
import * as path from 'path';

const createFiles = () => {
  let latest = getNext();
  let newDir = 'day' + (latest < 10 ? '0'+latest : latest);
  let dirpath = path.join(__dirname, newDir);

  fs.mkdirSync(dirpath);
  fs.writeFileSync(path.join(dirpath, 'data.txt'), '');
  fs.writeFileSync(path.join(dirpath, 'sample.txt'), '');
  fs.writeFileSync(path.join(dirpath, 'index.ts'), `
import { AOCInput } from "../interfaces";
import * as _ from 'lodash';

const transform = (rows: AOCInput) => {
  return rows;
}

export const part1 = (rows: AOCInput) => {
  
}`);
}


const getNext = () => {
  let dirs = fs.readdirSync(__dirname);
  let latest = dirs.filter(d => d.startsWith('day'))
    .sort()
    .pop();
  let daynum = parseInt(latest.match(/day(\d+)/)[1]);
  return daynum + 1;
}

createFiles();