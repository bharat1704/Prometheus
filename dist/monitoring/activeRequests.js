"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prom_client_1 = __importDefault(require("prom-client"));
const activeUSerGauge = new prom_client_1.default.Gauge({
    name: "active_users",
    help: 'total number of users whose request has not yet been resolved yet',
    labelNames: ['method', 'route']
});
