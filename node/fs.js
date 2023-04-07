const fs=require("fs");
const quote ="Make everyday a little less ordinarily";
fs.writeFile("text.txt",quote,() => {
    console.log("Completed Writing");
});