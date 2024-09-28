import { NextFunction, Request, Response } from "express";
import client from "prom-client";

// Create a counter metric
const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route']
});

//@ts-ignore
export function secondMiddlware(req, res, next){

    requestCounter.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    })
next();
    
}
