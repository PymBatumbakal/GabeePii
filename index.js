import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'node:fs';

// Dynamically import inquirer
import('inquirer').then((inquirer) => {
  var wew = generateName();
  var ewe = randomSuperhero();

  // You need to access the inquirer.default.prompt if using ESM
  inquirer.default
    .prompt([
      {
        message: "What is your name?",
        name: "me"
      }
    ])
    .then((answers) => {
      console.log("Hello ", answers.me);
      console.log("Your villain name will be ", wew);
      console.log("and your superhero name will be ", ewe);
      
      var qr1 = qr.image(answers.me, { type: 'png' });
      qr1.pipe(fs.createWriteStream('qr1.png'));

      var qr2 = qr.image(wew, { type: 'png' });
      qr2.pipe(fs.createWriteStream('qr2.png'));

      var qr3 = qr.image(ewe, { type: 'png' });
      qr3.pipe(fs.createWriteStream('qr3.png'));

      console.log("QR codes are generated");

      const realName = answers.me + ", ";
      const shName = ewe + " ";
      const vilName = wew + ", ";
      const data = realName + vilName + shName;

      writeFile('myhero.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })
    .catch((error) => {
      console.error(error);
    });
});