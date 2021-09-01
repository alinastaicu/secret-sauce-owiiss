# How to use the project

This project will run tests for 3 users by default: `standard_user`, `problem_user`, `performance_glitch_user`

The tests are currently failing because `problem_user` will not pass.

If you want to run tests for `standard_user` and `performance_glitch_user` please visit `cypress.json` and change the key `env.users:standard,glitch`

The project uses the following cypress dashboard for test results: https://dashboard.cypress.io/projects/fqcwnq/runs


# How to setup and run locally
```sh
nvm install # given nvm is used

yarn install # given yarn is installed

yarn tsc # verify types

yarn tsc # verify linting issues

yarn cypress:open # to open cypress interface

yarn cypress:run:chrome # to run all tests locally in chrome
```

# How to run in docker
```sh
chmod u+x ./cy-run.sh

# run for standard user
./cy-run.sh --env users=standard --browser chrome --record --key=d2579b42-e423-431a-aa08-fdd76cc4cadd
./cy-run.sh --env users=standard --browser firefox --record --key=d2579b42-e423-431a-aa08-fdd76cc4cadd

# run for glitchy user
./cy-run.sh --env users=glitchy --browser chrome --record --key=d2579b42-e423-431a-aa08-fdd76cc4cadd
./cy-run.sh --env users=glitchy --browser firefox --record --key=d2579b42-e423-431a-aa08-fdd76cc4cadd

# run for problem user
./cy-run.sh --env users=problem --browser chrome --record --key=d2579b42-e423-431a-aa08-fdd76cc4cadd
./cy-run.sh --env users=problem --browser firefox --record --key=d2579b42-e423-431a-aa08-fdd76cc4cadd

```

# TODOs:

- currently using Cypress Dashboard for reports. My recommendation is to continue using Cypress Dashboard even if it's freemium tool. A free alternative is https://docs.qameta.io/allure/
- Instead of running in docker I would implement something like Circle.ci
- To be able to run tests in parallel I need to setup a CI environment, like Circle.CI for cypress

----

# Test Automation Engineer - Coding Challenge

Welcome! We're super happy to have you here and that you are interested in working with the Capmo Engineering Team. To get a better idea of your automation skills, we'd like you to complete the following coding challenge. Some rules & guidelines.

- You can pick whatever programming language you like
- Make sure the app runs in a UNIX like environment, such as Linux or Mac OS.
- The submited application doesn't require for-pay software
- The submitted app contains instructions on how to run it
- Strong bonus: the submitted app is containerised

## Description

Write tests to automate the [saucedemo.com](https://www.saucedemo.com/) e-commerce website, design and implement crucial test-cases for it, as well as the underlying test automation framework. Complete the assignment as you would do for a production scenario.

### Automation requirements

- Your tests must automate a browser environment to conduct the tests
- The solution must produce a comprehensible test report (file)

### Technical requirements

- Tests can run from the commandline
- Tests can run different browser flavors (configurable)
- Tests run in parallel
- Tests capture screenshots on failure

### Functional requirements

The scenario automates an e-commerce shop. Come up with the most important user flows and explain your thoughts accordingly. Automate those flows and assert that the software works according to your expectations.

## Bonus

When running your test-cases, use the `performance_glitch_user`.

## What we are looking for

- software engineering craftmanship
- an eye for software architecture, especially for the famework and the underlying configuration
- robust automation that can deal with underlying changes of the software
- correctness of the submitted code
- proper separation of concerns
- simple solutions

Please upload your modified version of this code to CodeSubmit.
