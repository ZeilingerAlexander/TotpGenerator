export class TotpOptions {
    constructor(init = {}) {
        this.interval = init.interval || 30;
        this.digits = init.digits || 6;
        this.algorithm = init.algorithm || "SHA1";
    }
}
