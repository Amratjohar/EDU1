const fs=require("fs");
const quote ="Live More Worry Less";

fs.writeFile("backup/text-1.html",quote,() => {
    console.log("Completed Writing");
});

// for(let i=1;i<=10;i++)
// {
//     fs.writeFile("backup/text-1.html",quote,() => {
//         console.log("Completed Writing");
//     });
// }

for(let i=1;i<=10;i++)
{
    fs.writeFile(`./backup/text-${i}.html`,quote,() => {
        console.log(`Completed Writing text-${i}.html`);
    });
}

const [, ,noofFiles]=process.argv;
console.log(noofFiles)

const quote3="Happy Day😊";

for(let i=1;i<= noofFiles;i++)
{
    fs.writeFile(`./backup/file-${i}.html`,quote3,() => {
        console.log(`Completed Writing file-${i}.html`);
    });
}