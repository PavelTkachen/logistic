import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import routes from './routes';

const app = express();
const port = 8000;

declare module 'express-session' {
  interface SessionData {
    loggedIn: boolean;
    username: string;
  }
}
app.use(session(
  {
    secret: 'My secret key',
    name: 'uniqSessionID',
    saveUninitialized: false,
    resave: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors);

for (let route in routes) {
  app.use(routes[route]);
};

app.listen(port, () => { console.log('Website is running') });
