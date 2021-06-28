import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('dist'));
app.use(/^(?!\/?api)/, (req, res) => {
	res.sendFile(path.resolve('dist', 'index.html'), () => {});
});

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);
});
