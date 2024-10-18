"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotpOptions = void 0;
var TotpOptions = /** @class */ (function () {
    function TotpOptions(init) {
        if (init === void 0) { init = {}; }
        this.interval = init.interval || 30;
        this.digits = init.digits || 6;
        this.algorithm = init.algorithm || "SHA1";
    }
    return TotpOptions;
}());
exports.TotpOptions = TotpOptions;
