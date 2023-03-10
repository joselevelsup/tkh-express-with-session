import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import setupLocalStrategy from "./auth/index.js";
import authRouter from "./routes/auth.js";

export default function createServer() {
  const app = express();

  app.use(express.json());

  //Add sessions here

  app.use(cookieParser());

  setupLocalStrategy(passport);

  //Add passport session middleware

  app.use("/auth", authRouter);

  //Need to make some type of middleware to see if the user is logged in.
  //add the middleware to the route below

  app.get("/protected", function (request, response) {
    response.status(200).json({
      success: true,
      message: "You should be good",
    });
  });

  return app;
}
