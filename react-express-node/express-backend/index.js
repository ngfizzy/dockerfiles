const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../', 'react-frontend/build')));

app.get('/api', (_, res) => {
    return res.json({ message: 'Hello from express'});
});

app.get('*', (_, res) => {
	return res.sendFile(
		path.resolve(__dirname, '../', 'react-frontend/build/index.html')
	);
});

app.listen(8080, '0.0.0.0', () => console.log('Listening on port 8080'));
