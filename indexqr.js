import inquirer from "inquirer"; 
import qr from "qr-image"; 
import fs from "fs";
inquirer
  .prompt([
    {message:"type in your url:",
        name:"URL",
    },
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("my_img.png"));

fs.writeFile("urrl.txt",url,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
      // Something else went wrong
    }
  });