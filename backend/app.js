const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ credentials: true, origin: true }));
app.use(
    express.text({
        type: () => {
            return { text: 'text' };
        },
    })
);

app.get('/', async (req, res) => {
    res.send(`Health check! Server running on port ${PORT}!`);
});

const account = require('./api/account');
const admin = require('./api/admin');
app.use('/api/v1/account', account);
app.use('/api/v1/admin', admin);

module.exports = { app, PORT };
