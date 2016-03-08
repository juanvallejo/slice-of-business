var xlsx = require('node-xlsx');

try {
	var obj = xlsx.parse(__dirname + '/10_28_2015_Master.xlsx');

	console.log(obj[0].data.length);
} catch(e) {
	console.log("ERR");
}