import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { routes } from './routes';

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

app.use(routes.auth);
app.use(routes.users);

app.listen(port, () => { console.log('Website is running') });
