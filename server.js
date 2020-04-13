// Install express server
const express = require('express');
const path = require('path');
const app = express();

// Check that the environment is on production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('dist/angular-app'));
}

// Serve only the static files form the dist directory
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist/angular-app', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);