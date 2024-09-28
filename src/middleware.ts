import { NextFunction, Request, Response } from "express";

//@ts-ignore
export const middleware = (req, res, next) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`Request took ${endTime - startTime} ms`);

}