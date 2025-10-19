//scrieți o aplicație simplă care creează un director, 
//un fișier în director și 
//apoi șterge directorul (puteți utiliza rimraf).

import {rimraf} from 'rimraf';
import fs from 'fs/promises';

async function main()
{
await rimraf("newDir");
await fs.mkdir("newDir",(err) => {});
await fs.writeFile("newDir/newFile.txt","Asta e fisierul nou!");
await rimraf("newDir");
}

main();
