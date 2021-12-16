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
        


    }
  }
console.log("works");
