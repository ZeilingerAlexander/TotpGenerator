# totp_generator_hexadecimal

Generates totp keys from hexadecimal strings<br>
I wrote this because I don't like base32 encoding, since node doesn't support it by default.<br>
Also node now has the <code>crypto.createHmac()</code> function which most existing packages don't use

## Usage
```js
import { GenerateTotpValue } from "totp_generator_hexadecimal";

const key = "ABC";

const totp = await GenerateTotpValue(key);
console.log(totp);
```

## Usage With options
```js
import { GenerateTotpValue, TotpOptions} from "totp_generator_hexadecimal";

const options = new TotpOptions({algorithm : "SHA256", interval : 60, digits : 4 });

const key = "ABC";

const totp = await GenerateTotpValue(key,options);
console.log(totp);
```

## Supported options
<code>TotpOptions</code> implements the following
1. interval : number
Default is 30
2. digits : number 
Default is 6
3. algorithm : string
Default is SHA1

## Supported Digest Algorithms
Depends on [node <code>crypto.createHmac()</code>](https://nodejs.org/api/crypto.html#cryptocreatehmacalgorithm-key-options "node js crypto library")<br>
Run <code>openssl list -digest-algorithms</code> in your terminal to see supported algorithms

## Source Code and License
See [github](https://github.com/ZeilingerAlexander/TotpGenerator "github repo")
