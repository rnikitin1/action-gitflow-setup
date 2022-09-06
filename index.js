const core = require('@actions/core');
const github = require('@actions/github');

try {
    const envsJSON = core.getInput('envs');
    console.log(`Input envs: `, envsJSON);
    const labelsJSON = core.getInput('labels');
    console.log(`Input labels: `, labelsJSON);

    const envs = JSON.parse(envsJSON);
    const labels = JSON.parse(labelsJSON);
    const githubEvent = github.context.payload;
    console.log(`The event payload: `, githubEvent);

    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
} catch (error) {
    console.log(`Error message: ${error.message}`);
    core.setFailed(error.message);
}
