# Zajno's git flow setup

A composite Github actions that helps tp determine:

* Environment: Staging or Production
* Build target: `stage`, `prod` or `none`
* Deploy target: `stage`, `prod` or `none`

based on `push` or `pull_request` events.

Typical parent action setup:

```yaml
on:
  pull_request:
    types: [ready_for_review, opened, synchronize, reopened]
    paths:
      - 'src/**'
  push:
    paths:
      - 'package.json'
    branches:
      - master
      - develop
```
