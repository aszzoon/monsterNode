import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";
//import globalRouter from "./routers/globalRouter";
//import videoRouter from "./routers/videoRouter";
//import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();

// Middleware
const logger = morgan("dev");
app.use(logger);

// Mount Routers
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// Server Start
const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} `);

app.listen(PORT, handleListening);
