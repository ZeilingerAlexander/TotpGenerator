/*Fills the remaining space before the string with chars until its n in length (string length not memory)*/
function LeftPad(/*String*/str, /*Char*/character,/**/len){
	str = str + "";
	const remainingChars = len > str.length ? len - str.length : 0;
	return character.repeat(remainingChars) + str;
} 

/*Generates a TOTP value from a provided hexadecimal key, throws on failure*/
export async function GenerateTotpValue(/*Hex*/key){
	const epoch = Math.floor(Date.now() / 1000.0);
	const time = LeftPad(Math.floor(epoch / 30).toString(16),"0",16);

	// base digest returns as hex int blocks of 2 so 1 byte per block (ff,fa,2f,...)
	// sha1 returns a total of 20 bytes
	const hmac = crypto.createHmac("SHA1",key,{encoding:"HEX"});
	hmac.update(time, "HEX");
    	const hash = hmac.digest();

	// offset is last 4 bits but we need to leftpad since js automaticly removes 0s in front
	const offset = parseInt(LeftPad(hash[19].toString(2),"0",8).substring(4),2);

	// concat 4 bytes from offset then take the last 31 bits, thats our full totp value
	let bits = htb_pad(hash[offset]) + htb_pad(hash[offset+1])
		+ htb_pad(hash[offset+2]) + htb_pad(hash[offset+3]);
	const totp_full = parseInt(bits,2) & 0x7fffffff;
	return totp_full % Math.pow(10,6);
}

