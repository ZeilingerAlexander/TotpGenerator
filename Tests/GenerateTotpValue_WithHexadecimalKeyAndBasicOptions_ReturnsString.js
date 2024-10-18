import { GenerateTotpValue } from "../index.js";
import { TotpOptions } from "../totpOptions.js";

function PrintGenerateTotpValueResult(result, testName, expectedResultLength){
	if (expectedResultLength !== undefined){
		if ((result + "").length === expectedResultLength){
			console.log(`TEST : ${testName} success`);
		}
		else{
			console.error(`TEST : ${testName} failure`);
		}
	}
	else if (typeof result === "string"){
		console.log(`TEST : ${testName} success`);
	}
	else{
		console.error(`TEST : ${testName} failure`);
	}
}

async function RunSingleTest(key,options,testName,shouldThrow, expectedResultLength){
	try{
		const result = await GenerateTotpValue(key,options);
		console.log(result);
		PrintGenerateTotpValueResult(result,testName,expectedResultLength);
	}
	catch(error){
		if (shouldThrow){
			console.log(`TEST : ${testName} success`);
		}
		else{
			console.error(`TEST : ${testName} failure`);
		}
	}
}

RunSingleTest("",{algorithm : "SHA1"}, "empty key sha1");
RunSingleTest("(@#@KFDJ", {algorithm : "SHA1"}, "invalid hex key sha1");
RunSingleTest("(@#@KFDJ", {algorithm : "SHA256"}, "invalid hex key sha256");
RunSingleTest(undefined, {algorithm : "SHA1"}, "undefined key", true);
RunSingleTest("ABC", {algorithm : "@(#!"}, "invalid algorithm", true);
RunSingleTest("ABC", {digits : 3}, "Short output", false, 3);
RunSingleTest("ABC", {digits : 99}, "Long output", false, 99);
RunSingleTest("ABC", {interval : 20313}, "long interval");
RunSingleTest("ABC", {digits : 0}, "0 digits", false, 6);
