# How to use the project

This project will run tests for 3 users by default: `standard_user`, `problem_user`, `performance_glitch_user`

The tests are currently failing because `problem_user` will not pass.

If you want to run tests for `standard_user` and `performance_glitch_user` please visit `cypress.json` and change the key `env.users:standard,glitch`


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
