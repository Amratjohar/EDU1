const fs=require("fs");
const quote ="Live More Worry Less";

fs.writeFile("backup/text-1.html",quote,() => {
    console.log("Completed Writing");
});

for(int i=1;i<=10;i++)
{
    fs.writeFile("backup/text-1.html",quote,() => {
        console.log("Completed Writing");
    });
}