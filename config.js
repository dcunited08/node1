const fs = require('fs');

class Config {
    static load() {
        const configFileName = 'config.json';
        const defaultConfigFile = './config.default.json';
        const locConfigFile = './' + configFileName;
        const swarmConfigFile = '/' + configFileName;
        const configFile = fs.existsSync(swarmConfigFile) ? swarmConfigFile : (fs.existsSync(locConfigFile)? locConfigFile : defaultConfigFile);
        const config = require(configFile);

        return config;
    }
}

module.exports = Config;