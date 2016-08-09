
document.addEventListener("deviceready", onDeviceReady, false);

var ad;


function onDeviceReady() {
    bluetoothle.initialize(
		function(obj) {
		},
		function(obj) {
		}
	);
}

var startScan = function() {
	var params = {
      services:[],
      allowDuplicates: false,
    };
	bluetoothle.startScan(
		function(obj) {
			if(obj.status != "scanStarted") {
				if(obj.name == "LED") {
					ad = obj.address;
					connect(obj.address);
					bluetoothle.stopScan();					
				}
			}
		}, 
		function() {
			alert("Failed to Scan");
		},
		params
	);

}

var connect = function(address) {
    var params = {address:address};
	bluetoothle.connect(
		function() {
			discover(address);
		},
		function() {
			alert("Failed to Connect");
		},
		params
	);
}

var discover = function(address) {
	var params = {address:address};
	bluetoothle.discover(
		function(obj) {
			//write(address);
		},
		function() {
			alert("Failed to Discover");
		},
		params
	);
}

var writeToArduino = function(value) {
	var u8 = new Uint8Array(1);
	u8[0] = value;
	var v = bluetoothle.bytesToEncodedString(u8);
	var params = {
		address:"98:4F:EE:0F:32:4F",
		service:"19B10000-E8F2-537E-4F6C-D104768A1214",
		characteristic:"19B10001-E8F2-537E-4F6C-D104768A1214",
		value:v,
		type:"noResponse"
	};
	bluetoothle.write(
		function(obj) {
			//alert(JSON.stringify(obj));
		},
		function(obj) {
			alert(JSON.stringify(obj));
		},
		params
	);
}

var disc = function() {
	var params = {address:ad};
	bluetoothle.disconnect(function(){},function(){}, params);
}