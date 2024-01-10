'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
const path = require('path');

// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const cromosRoutes = require('./cromos/cromos.routes');
const foroRoutes = require('./foro/foro.routes');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);
app.use('/api/assets', express.static(path. join(__dirname, 'cromos','assets')));

authRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});

// inicializamos las rutas de la API.
cromosRoutes(router);

foroRoutes(router);


app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));
