const core = require('@actions/core');
const github = require('@actions/github');

try {
    const envsJSON = core.getInput('envs');
    console.log(`Input envs: `, envsJSON);

    const envs = JSON.parse(envsJSON);
    const githubEvent = github.context.payload;
    console.log(`The event payload: `, githubEvent);
    console.log('githubEvent labels', githubEvent.pull_request.labels);

    const labelNames = labels.map(l => l.name);
    const isStagingSync = labelNames.includes('sync staging');
    let env = null;

    if (isStagingSync) {
        const envLabel = labelNames.find(name => !!envs[name]);
        env = envs[envLabel];

        console.log('Defined env: ', env);

        if (env) {
            core.setOutput("env", env);
        }
    }

    core.setOutput("isDefined", !!env);
} catch (error) {
    console.log(`Error message: ${error.message}`);
    core.setFailed(error.message);
}
