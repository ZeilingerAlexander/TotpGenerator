export class TotpOptions{
	interval : number;
	digits : number; 
	algorithm : string;

	constructor(init: { interval? : number, digits? : number, algorithm? : string} = {} ) {
		this.interval = init.interval || 30;
		this.digits = init.digits || 6;
		this.algorithm = init.algorithm || "SHA1";
    }
}
