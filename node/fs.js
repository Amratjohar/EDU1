const fs=require("fs");
const quote ="Make everyday a little less ordinarily";
// fs.writeFile("text.txt",quote,() => {
//     console.log("Completed Writing");
// });

// fs.readFile("./cool.txt",'utf-8',(err, data) =>{
//     if(err){
//         console.log("Error❌",err);
//     }
//     console.log("Content in the file is",data);
// });

const quote4="Be Happy";
fs.appendFile("cool.txt",quote4,() => {
        console.log("Completed Writing");
    });