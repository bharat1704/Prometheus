"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondMiddlware = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
// Create a counter metric
const requestCounter = new prom_client_1.default.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route']
});
//@ts-ignore
function secondMiddlware(req, res, next) {
    requestCounter.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    });
    next();
}
exports.secondMiddlware = secondMiddlware;
