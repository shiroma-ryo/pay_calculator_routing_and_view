import express from "express";
import logger from "morgan";
import expressLayouts from "express-ejs-layouts";
import path from "node:path";
import {homeRouter} from "./routes/home";
import {paySplitRouter} from "./routes/pay_split";
import { payTotalRouter } from "./routes/pay_total";
import {infoRouter} from "./routes/info";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src/views"));
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.use("/", homeRouter);
app.use("/pay-split", paySplitRouter);
app.use("/info", infoRouter);
app.use("/pay-total",payTotalRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
