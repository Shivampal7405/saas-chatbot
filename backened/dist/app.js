import express from "express";
import { config } from 'dotenv';
import morgan from 'morgan';
config();
const app = express();
//middleware
app.use(express.json());
app.use('/static', express.static('public'));
//remove if it in profuction
app.use(morgan("dev"));
app.use("/api/v1");
export default app;
//# sourceMappingURL=app.js.map