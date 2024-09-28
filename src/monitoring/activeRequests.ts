import client, { Counter } from "prom-client";

const activeUSerGauge = new client.Gauge({
    name: "active_users",
    help: 'total number of users whose request has not yet been resolved yet',
    labelNames: ['method', 'route']
});