"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var sensei_1 = require("./sensei");
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pubkey, macaroon, address;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, sensei_1["default"].init({
                    username: 'admin',
                    alias: 'Big Daddy',
                    passphrase: 'ATL bitd3vs',
                    start: true
                })];
            case 1:
                _a = _b.sent(), pubkey = _a.pubkey, macaroon = _a.macaroon;
                sensei_1["default"].setMacaroon(macaroon);
                return [4 /*yield*/, sensei_1["default"].getUnusedAddress()];
            case 2:
                address = (_b.sent()).address;
                console.log(address);
                return [2 /*return*/];
        }
    });
}); };
init();
// create lightweight child node
// const { alicePubkey, aliceMacaroon } = await senseiClient.createNode({
//   username: 'alice',
//   alias: 'alice',
//   passphrase: 'alicespassphrase',
//   start: true,
// });
// search nodes for alice
// const { nodes } = await senseiClient.getNodes({
//   page: 0,
//   searchTerm: alicePubkey,
//   take: 1,
// });
// const aliceNodeInfo = nodes[0];
// const { listenAddr, listenPort } = aliceNodeInfo;
// open a public channel with alice
// await senseiClient.openChannel({
//   nodeConnectionString: `${alicePubkey}@${listenAddr}:${listenPort}`,
//   amtSatoshis: 25000,
//   isPublic: true,
// });
// have alice generate an invoice for 1000 satoshis
// senseiClient.setMacaroon(aliceMacaroon);
// const { invoice } = await senseiClient.createInvoice({
//   amountMillisats: 1000000,
//   description: 'paying for some coffee',
// });
// have admin node pay the invoice
// senseiClient.setMacaroon(macaroon);
// await senseiClient.payInvoice(invoice);
