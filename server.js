const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers/index');
const helpers = require('./utils/helpers');
const cors = require('cors');
const fileupload = require('express-fileupload'); 

const sequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

app.set('view-engine', 'handlebars');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'secret', //change this to something else later on
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine(`handlebars`, hbs.engine);
app.set(`view engine`, `handlebars`);

//Cloudinary set-up
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

//cloudinary ends

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));
app.use(fileupload({useTempFiles: true}))

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
