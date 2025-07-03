import expresss from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = expresss();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(expresss.json({ limit: "16kb" }));
app.use(expresss.urlencoded({ extended: true, limit: "16kb" }));
app.use(expresss.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.route.js";
app.use("/api/v1/users", userRouter);
export { app };
