import express from "express";

export const payTotalRouter = express.Router();

payTotalRouter.get("/", (req, res) => {

    if (req.query.coins && req.query.people) {

         const keisan = (coins: number, people: number): number => {
            const result = coins * people;
            return result;
        };

        res.render("pay_total/result", {
            coins:req.query.coins,
            people:req.query.people,
            result:keisan(Number(req.query.coins), Number(req.query.people)),
        });

    } else {
        res.render("pay_total/index");
    }

    // const keisan = (coins: number, people: number): number => {
    // const result = coins * people;
    // return result;
    // };

    // if(req.query.coins && req.query.people){
    // const coins = Number(req.query.coins);
    // const people = Number(req.query.people);
    // //console.log(JSON.stringify(req.query));
    // res.render("pay_total/result",{});
    // }else{
    // }
});





// const  keisan = () => {

//     let calculate:number
//     let coins:number 
//     let people:number 
//     calculate = coins * people

//     // console.log(calculate)
// }