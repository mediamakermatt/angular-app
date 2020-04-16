# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## VSC Error (ng.ps1 cannot be loaded)

Error: `ng : File C:\Users\<CurrentUser>\AppData\Roaming\npm\ng.ps1 cannot be loaded.`

If you are running any angular command e.g. ng serve, ng build, ng new, ng generate etc. from Visual Studio Code Terminal or from command prompt and getting above error then you can go through the below solution to fix above issue.

Solution: Run the following command from the same terminal or command prompt and re-run the ng command to check if it works on your machine:

`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

## Configuring for Heroku (Free)

Ensure you have the latest version of angular cli and angular compiler cli.

`npm install @angular/cli@latest @angular/compiler-cli --save-dev`

In your package.json, copy:

`"@angular/cli”: “x.x.x”,`
`"@angular/compiler-cli": "^x.x.x",`

from devDependencies to dependencies.

Under “scripts”, add a postinstall command like so:

`"heroku-postbuild": "ng build --prod"`

You will need to add the Node and NPM engines that Heroku will use to run your application. Preferably, it should be same version you have on your machine. So, run `node -v` and `npm -v` to get the correct version and include it in your package.json file like so:

`"engines": {`
    `"node": "x.x.x",`
    `"npm": "x.x.x"`
`}`

Copy `"typescript": "~x.x.x"` from devDependencies to dependencies to also inform Heroku what typescript version to use.

Run the command `npm install enhanced-resolve --save-dev`

Install Express server by running:

`npm install express path --save`

Create a `server.js` file in the root of the application and paste the following code:

```
// Install express server
const express = require('express');
const path = require('path');
const app = express();

// Check that the environment is on production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('dist/<app-name>'));
}

// Serve only the static files form the dist directory
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist/<app-name>', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
```

In package.json, change the “start” command to node server.js so it becomes:

`"start": "node server.js"`

You should not run into any issue if using Angular 9 following these methods.

## TODO / WIP:

Downloaded SQL Server 2019 from Microsoft:

`https://www.microsoft.com/en-us/sql-server/sql-server-downloads`

Added an example database to assets folder:

`src/assets/databases/mysqlsampledatabase.sql`

1) Learn to extract data from sample sql file and turn it into JSON.
2) Learn how to reverse engineer to be able to build own databases.
3) Use the JSON from databases to create an API.
4) Use the API to build a project on, possibily including:

<ul>
    <li>Searches</li>
    <li>Auto Completes</li>
    <li>Filters</li>
    <li>Custom Groups</li>
    <li>Specialized Results</li>
</ul>