import express from "express";
import client from "prom-client";
import { middleware } from "./middleware";
import {secondMiddlware } from "./monitoring/requestCount";

const app = express();
app.use(express.json());

app.use(middleware);
app.use(secondMiddlware);


app.get("/user", (req, res) => {
    res.send({
        name: "Bharat Mali",
        age: 25,
    });

});

app.post("/user", (req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id: 1,
    });
});


app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(4000);
