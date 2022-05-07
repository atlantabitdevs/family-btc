const app = require('./app');
const PORT = process.env.PORT || 4000;
const debug = require('./utils/debug');

app.listen(PORT, () => {
    debug.info(`API Server listening on http://127.0.0.1:${PORT}`);
});
