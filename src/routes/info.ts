import express from "express";
import { body } from "express-validator";

export const infoRouter = express.Router();

infoRouter.get("/about", (req, res) => {
  res.render("info/about");
});

infoRouter.get("/notice", (req, res) => {
  const notices = [
    {
      date: "2023/1/10",
      body: "Release a new feature"
    },
    {
      date: "2023/1/3",
      body: "Fix minor bugs",
    },
    {
      date: "2023/1/1",
      body: "First version released!",
    },
  ];
  res.render("info/notice", {notices});
});
