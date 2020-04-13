// Install express server
const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + './dist/angular-app'));

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);