const os= require("os");
console.log("Free Memory",os.freemem()/1024/1024/1024);
console.log("Total Memory",os.totalmem()/1024/1024/1024);
console.log("User info",os.userInfo());
console.log("Platform",os.platform());
console.log(`Processor, ${os.cpus().length} Core`);
console.log(os.arch());
console.log(os.uptime());

// 1024bytes -> 1kb -> 1024kb -> 1mb -> 1024mb -> 1 gb