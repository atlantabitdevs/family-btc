"use strict";
exports.__esModule = true;
var sensei_client_1 = require("@l2-technology/sensei-client");
var senseiHost = 'https://nap.fyi/';
var senseiClient = new sensei_client_1["default"]({ basePath: senseiHost });
exports["default"] = senseiClient;
