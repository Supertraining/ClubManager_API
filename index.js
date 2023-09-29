import express, { json, urlencoded } from 'express';
import cors from 'cors';
import * as config from './config/config.js';
import { connect } from './utils/mongoConnection.js';
import CourtsRouter from './routes/courts.js';
import UserRouter from './routes/users.js';
import EventRouter from './routes/events.js';
import logger from './utils/logger.js';
import helmet from "helmet";
import cron from 'node-cron';
import { repeatPermanentReservations } from './utils/updatePermanentReservations.js';

const app = express();

app.use(helmet());

app.use(cors({
  origin: [ process.env.client_prod_url, config.admin_prod_url, config.client_dev_url, config.admin_prod_url ],
  credentials: true
}));

app.use(json());
app.use(urlencoded({ extended: true }));

const courtsRouter = new CourtsRouter();
const userRouter = new UserRouter();
const eventsRouter = new EventRouter();
app.use(userRouter.start());
app.use('/courts', courtsRouter.start());
app.use('/events', eventsRouter.start());

process.env.TZ = 'America/Argentina/Buenos_Aires';
cron.schedule('01 00 * * *', repeatPermanentReservations);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connect(config.mongoUrl)
  logger.info(`Club Manager app listening at ${PORT}`);
})

