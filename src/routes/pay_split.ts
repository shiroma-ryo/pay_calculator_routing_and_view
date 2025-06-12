import express from "express";

export const paySplitRouter = express.Router();

paySplitRouter.get("/",(req, res) =>{
    res.render("pay_split/index");
});

//  export {paySplitRouter};

// export const homeRouter = express.Router();

// homeRouter.get("/", (req, res) => {
//   res.render("home/top");
// });
