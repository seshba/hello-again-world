const commonSettings = [
    'test/features/**/*.feature', // Specify our feature files
    '--require-module ts-node/register', // Load TypeScript module
    '--require test/step_definitions/**/*.ts', // Load step definitions
    '--require test/framework/**/*.ts', // Load interface definitions
    '-f json:build/test-results/cucumber_report.json',
    '--format progress-bar', // Load custom formatter
    '--format node_modules/cucumber-pretty' // Load custom formatter
].join(' ');

const allTests = [
    commonSettings,
    '--tags "not @ignore"'
].join(' ');

function getCucumberSettings(){
    const prop = new Map();
    prop.set('local', allTests);
    return prop;
}

function getActiveConfig(){
    const appEnv = 'local';
    const activeConfig = getCucumberSettings().get(appEnv.toLowerCase());
    console.log(`Active cucumber configuration for ${appEnv} environment :  ${activeConfig}`);
    return activeConfig;
}

module.exports = {
    default: allTests,
    active: getActiveConfig()
};
