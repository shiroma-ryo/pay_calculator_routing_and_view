import express from "express";

export const infoRouter = express.Router();

infoRouter.get("/about", (req, res) => {
  res.render("info/about");
});

infoRouter.get("/notise", (req, res) => {
  const notices = [
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
