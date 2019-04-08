https://travis-ci.com/cristissouza/multiple-tests-repository.svg?branch=master

# aplication-test
QA engineer Aplication test


## Important!!!
#### All test repository (e2e, api-test and visual-regression-test) run with the **npm run test** command
#### The CI was configured to run just the API test

##### * e2e
 This folder has its your package.json.
 To run the e2e test you need to go to the e2e folder and run **npm run test**

##### * api-test
To run the API test just run the command  **npm run test** in the root of aplication-test repository


##### * Visual regression testing
To run the visual regression testing, just run the command  **npm run test** inside the visual-regression-testing folder.
There are already some screenshoot attached to this tests.
To approve new screenshoots, you need to run **npm run visual:approve** inside the visual-regression-testing folder
