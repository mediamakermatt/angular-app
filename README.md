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

## SQL Server 2019 Build:

Instance Name: `MSSQLSERVER`
SQL Administrators: `MediaMakerMatt-PC\MediaMakerMatt`
Features Installed: `SQLENGINE`
Version: `15.0.2000.5 RTM`

Connection String: `Server=localhost;Database=master;Trusted_Connection=True;`
SQL Server Install Log Folder: `C:\Program Files\Microsoft SQL Server\150\Setup Bootstrap\Log\20200416_163704`
Installation Media Folder: `C:\SQL2019\Developer_ENU`
Installation Resources Folder: `C:\Program Files\Microsoft SQL Server\150\SSEI\Resources`

On setup, select all features in `Feature Selection`. The instance root directory is: `C:\Program Files\Microsoft SQL Server\`.

On Instance configuration, check Named instance. For Named instance and Instance ID, to keep things simple, I used the same name and added a pin of numbers to the end, in this case `MSSQLSERVER3487`. 

On PolyBase configuration, I chose to `Use this SQL Server as standalone PolyBase-enabled instance`. It defaulted me with a port range for PolyBase services, so I kept it at the default: `16450-16460`.

On Java Install Location, I chose to `Install Open JRE 11.0.3 included with this installation`.

For Server Configuration, I left everything default and clicked Next.

For Database Engine Configuration, I left everything default except at the bottom, I clicked Add Current User to `Specify SQL Server Administrators`.

For Analysis Services Configuration, I did the same, just added myself for `Specify which users have administrative permissions for Analysis Services`. I made sure to have Tabular mode checked as it was default.

Things chosen for Integration Services Scale Out Configuration:

Port: `8391`
Create newe SSL Certificate: `CN=mediamakermatt-pc; CN=192.168.1.232`
Master Node Endpoint: `https://mediamakermatt-pc:8391`

For Distributed Replay Controller, I just added myself as the user and clicked Next, a pattern is emerging for many of these setup options.

For Distributed Replay Client, I added myself for the Controller Name: `MediaMakerMatt`
Working Directory: `C:\Program Files (x86)\Microsoft SQL Server\DReplayClient\WorkingDir\`
Result Directory: `C:\Program Files (x86)\Microsoft SQL Server\DReplayClient\ResultDir\`

Clicked Accept to consent to install Microsoft R Open and Python.

For offline installation of Microsoft Machine Learning Server Components:

<ul>
    <li>Setup was unable to contact the download server, provide the location installation files and click 'Next'. The files can be downloaded from: </li>
    <li>https://go.microsoft.com/fwlink/?LinkId=2085686&lcid=1033</li>
    <li>https://go.microsoft.com/fwlink/?LinkId=2085792&lcid=1033</li>
    <li>https://go.microsoft.com/fwlink/?LinkId=2085793&lcid=1033</li>
    <li>https://go.microsoft.com/fwlink/?LinkId=2085685&lcid=1033</li>
</ul>

So what I did was revisit where SQL Server was housed on my computer, and added a custom-resources folder: `C:\Program Files\Microsoft SQL Server\custom-resources` which I added the files to. I then pointed the install path to that folder and clicked Next. It built me a configuration structure with the file path: `C:\Program Files\Microsoft SQL Server\150\Setup Bootstrap\Log\20200416_164515\ConfigurationFile.ini` which I installed.

Computer restart required to complete the installation.

Now I am able to search in my computer typing `SQL Server` for different resources pertaining to this installation.

















