/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize : function() {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);


    	},


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');


		var buttonAddEntry = document.getElementById('buttonAddEntry');
		var buttonOpen = document.getElementById('buttonOpen');
		var buttonClaim = document.getElementById('buttonClaim');
		var buttonDeviceEnabledTrue = document
				.getElementById('buttonDeviceEnabledTrue');
		var buttonCheckHealth = document.getElementById('buttonCheckHealth');
		var buttonPrintNormal = document.getElementById('buttonPrintNormal');
		var buttonPrintBitmap = document.getElementById('buttonPrintBitmap');
		var buttonPrintBarCode = document.getElementById('buttonPrintBarCode');
		var buttonDeviceEnabledFalse = document
				.getElementById('buttonDeviceEnabledFalse');
		var buttonRelease = document.getElementById('buttonRelease');
		var buttonClose = document.getElementById('buttonClose');

		buttonAddEntry.addEventListener('click', function() {

			app.addEntry();
		});
		buttonOpen.addEventListener('click', function() {
			app.open();
		});
		buttonClaim.addEventListener('click', function() {
			app.claim();
		});
		buttonDeviceEnabledTrue.addEventListener('click', function() {
			app.setDeviceEnabledTrue();
		});
		buttonCheckHealth.addEventListener('click', function() {
			app.checkHealth();
		});
		buttonPrintNormal.addEventListener('click', function() {
			app.printNormal();
		});
		buttonPrintBitmap.addEventListener('click', function() {
			app.printBitmap();
		});
		buttonPrintBarCode.addEventListener('click', function() {
			app.printBarCode();
		});
		buttonDeviceEnabledFalse.addEventListener('click', function() {
			app.setDeviceEnabledFalse();
		});
		buttonRelease.addEventListener('click', function() {
			app.release();
		});
		buttonClose.addEventListener('click', function() {
			app.close();
		});
    },
    addEntry : function()
    {
    var mac = document.getElementById('textBoxMacAddress').value;//textBoxMacAddress //<script> document.getElementById("savefiles").value=mainfileName; </script>
    console.log("mac : "+mac);
      bxl_service.addEntry(
        function(){
        console.log('addEntry success');
			alert("addEntry success");
        },
        function(error){ console.log('addEntry Fail : ', error); },
        "SPP-R210", "0", mac
        );
    },
	open : function() {
		bxl_service.open(function() {
			alert("open success");
		}, function(error) {
			alert("open: " + error);
		}, "SPP-R210");
	},
	claim : function() {
		bxl_service.claim(function() {
			alert("claim success");
		}, function(error) {
			alert("claim: " + error);
		}, 0);
	},
	setDeviceEnabledTrue : function() {
		bxl_service.setDeviceEnabled(function() {
			alert("setDeviceEnabled success");
		}, function(error) {
			alert("setDeviceEnabled: " + error);
		}, true);
	},
	checkHealth : function() {
		bxl_service.checkHealth(function() {
			alert("checkHealth success");
		}, function(error) {
			alert("checkHealth: " + error);
		}, 2);
	},
	printBarCode : function() {
		bxl_service.printBarCode(function() {
			alert("printBarCode success");
		}, function(error) {
			alert("printBarCode: " + error);
		}, 2, "http://www.bixolon.com", 204, 3, 3, -1, -11);
	},
	printBitmap : function() {
//		bxl_service.printBitmapWithURL(function() {
//			alert("printBitmap success");
//		}, function(error) {
//			alert("printBitmapWithURL: " + error);
//		}, 2, "http://bixolon.com/html/en/images/intro/intro_brand01.gif", -11, -2);




   var base64Data = "iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAJWElEQVR4Xu3dP4x0UxjHcRIRIq8/lURjVXSIKLEkChVvq2DR6PyJBoXVaBRIJBqJVajRaK1KI0FCNMRK9P41RMHzxD3JzZjX7s5rc85z53OTk5mdvTPnd7+/Z345c+bcO5deYkMAAQSKELi0iE4yEUAAgUsEliJAAIEyBARWGasIRQABgaUGEECgDAGBVcYqQhFAQGCpAQQQKENAYJWxilAEEBBYagABBMoQEFhlrCIUAQQElhpAAIEyBARWGasIRQABgaUGEECgDAGBVcYqQhFAQGCpAQQQKENAYJWxilAEEBBYagABBMoQEFhlrCIUAQQElhpAAIEyBARWGasIRQABgaUGEECgDAGBVcYqQhFAQGCpAQQQKENAYJWxilAEEBBYagABBMoQEFhlrCIUAQQElhpAAIEyBARWGasIRQABgaUGEECgDAGBVcYqQhFAQGCpAQQQKENAYJWxilAEEBBYagABBMoQEFhlrCIUAQQElhpAAIEyBARWGavWCt2JRx+Jdj7ap9FeiPZz7UOiHoELExBY41fHbkj8K9pt0TKg8vba6XZV/TPxwOvjHxKFCGxGQGBtxu24Z2Ww3DqFSguYfCxb246mOzkiaqOiDKJsV0a7/rhO4v8/Rbss2rlp35fjdv8Ez7MLAiUJCKyLt20eTrvxcndGu2qDl/1lFmA/xv1vVwItQ+2LKdwy7FrI5YjqqWnfd+N2b4O+PQWBEgQE1mY25ajp0WgZUHl/vn0Xf3w1hcvh9I92u1lv//2s/fj3S9Mun0yazqIfr4lAdwIC63QW5OilBdX8mRkUGUqtne5VL27v1PTO9BI5Arv94l7OsxEYl4DAOpk3T8du+bFrZ7b7D3E/P459EO3oZC9zJnulttcE1pmw9aKDERBYFzYkwylHUzmCmQdVjqZaUI1g536I8JFwBCdoOHMCAuvfiNv8VAZVfmPXtgyqDIfDM3fldB3kCO/B6SnmsE7Hzt7FCAisfwxrIfVA3L95xcM34u+DaDk/NNqWgZpLG9pmWcNoDtHzvxLY5sBqIfVQEN1ZoZpLDPanoBp55fjbofGJmfZ74/7h/1ohXgyBgQhsY2DtBf913/SlLTmR/mK09wby6EJScnT1dbQbph3+jNvLC+gmEYGNCWxTYO0Gpfw2bXXdVMIbbSL9JIbmCLBNtuf+ubTh8ZM80T4IVCWwDYF11/RGzpHV6vZhPJDf+B0WM3C+lKFJvynuHBU7DnIROBWBJQfWurVTDU4GVY5QRpxIP87A+ak4bd/8YiCP14bAogksMbB2w7H3o82XJDQT86NfvrErBlUew7qw+jIezy8OjK4W/VZ1cElgaYH1X2H1bBxvWxFe0f08to9XhGcAZ1iN/E1mRdY0D0pgSYG1E4y/vwDn6uuTcrSYF+i7ZTq+tuwiR1w2BLaGwFICa3UB5dzAx+KPg+KO7oX+doLzb3H/7mhVP9YWt4L8ngSWEljzN/ScZ/WRVTuW/Mh3zfRHjiRzvZgNga0jsJTAynmcnGhfYljtx0G19VYugbx1b1EHPCewlMDKY8p5naung8vJ6fsWYHWOptq8XI6qctGrCfYFGOsQNiOwpMDaCwRtnicvYreEOZ6DOI48jSi3JczFbValnoXARGBJgZWH1NYjLSGs5qOrXGu17pQihYzAVhFYWmAtybz56TdGV0ty1rFsTEBgbYzuzJ+Yo8T8qbCcu8rRlg2BrScgsMYsgfz49/kkbSlLM8YkTVUpAgJrTLvm5wy6CsOYHlHVgYDA6gD9BF0exT43Rns32t4J9rcLAltBQGCNZ/N8EexSlmeMR5mikgQE1ni2vRWSnoyWV2LYHU8eRQj0IyCw+rFf1/NOPJgr23+Plr/gcziWPGoQ6EtAYPXlv9p7m2zPK6LmR0MbAgjMCAisccohR1d5DmTe3mt0NY4xlIxDQGCN40UbXTkNZxxPKBmMgMAaw5D5QtHzIemDMWRRgcBYBATWGH4chIy8KoNvBsfwg4pBCQis/sbknFW75pW5q/5+UDAwAYHV35z9kJBXFHWSc38vKBicgMDqb9BnIeGOaH4Mtb8XFAxOQGD1NahNtv8RMvInvI76ytE7AmMTEFh9/WkX6bOUoa8Pei9CQGD1Neowur8nmqsy9PVB70UICKy+Rv01de8SyH190HsRAgKrn1G70XWeipObi/T180HPhQgIrH5m7UfXljP046/nggQEVj/TDqJrq9v78ddzQQICq59ph9F1Tri/HC1HWzYEEDiGgMDqVyLtZ7yeCQl5pQYbAggIrGFroH1D6OoMw1pE2GgEjLD6OdICywnP/TzQczECAquPYfNTcq7oI0GvCNQjILD6eLYb3eYarJ+jXddHgl4RqEdAYPXxbC+6fUdg9YGv17oEBFYf756Pbl+ZurbKvY8Hei1IQGD1Me296PbhqWvfEvbxQK8FCQisPqbtR7d5Wk5uviXs44FeCxIQWH1MO4xuc5W7wOrDX69FCQisPsa1Ve7Z++3R8m8bAggcQ0Bg9SmRtmg0e+dBHw/0WpCAN0sf0+aB9WZIuD/aN9HyvMKjPpL0isD4BARWH49+jW7PrenaL+f08UOvRQgIrD5GvRrdPrema1du6OOHXosQEFh9jLo2us1fzHko2u/RcsT1UbSDaHm6jg0BBNYQEFjKAgEEyhAQWGWsIhQBBASWGkAAgTIEBFYZqwhFAAGBpQYQQKAMAYFVxipCEUBAYKkBBBAoQ0BglbGKUAQQEFhqAAEEyhAQWGWsIhQBBASWGkAAgTIEBFYZqwhFAAGBpQYQQKAMAYFVxipCEUBAYKkBBBAoQ0BglbGKUAQQEFhqAAEEyhAQWGWsIhQBBASWGkAAgTIEBFYZqwhFAAGBpQYQQKAMAYFVxipCEUBAYKkBBBAoQ0BglbGKUAQQEFhqAAEEyhAQWGWsIhQBBASWGkAAgTIEBFYZqwhFAAGBpQYQQKAMAYFVxipCEUBAYKkBBBAoQ0BglbGKUAQQEFhqAAEEyhAQWGWsIhQBBASWGkAAgTIEBFYZqwhFAAGBpQYQQKAMAYFVxipCEUBAYKkBBBAoQ0BglbGKUAQQEFhqAAEEyhAQWGWsIhQBBASWGkAAgTIEBFYZqwhFAAGBpQYQQKAMAYFVxipCEUBAYKkBBBAoQ0BglbGKUAQQEFhqAAEEyhAQWGWsIhQBBASWGkAAgTIE/gbg6NWXT8UnlgAAAABJRU5ErkJggg==;"
		bxl_service.printBitmapWithBase64(function() {
			alert("printBitmap success");
		}, function(error) {
			alert("printBitmapWithBase64: " + error);
		}, 2, base64Data, -11, -2);
	},
	printNormal : function() {
		bxl_service.printNormal(function() {
			alert("printNormal success");
		}, function(error) {
			alert("printNormal: " + error);
		}, 2, "http://www.bixolon.com\n\n\n\n\n");
	},
	setDeviceEnabledFalse : function() {
		bxl_service.setDeviceEnabled(function() {
			alert("setDeviceEnabled success");
		}, function(error) {
			alert("disable: " + error);
		}, false);
	},
	release : function() {
		bxl_service.release(function() {
			alert("release success");
		}, function(error) {
			alert("release: " + error);
		});
	},
	close : function() {
		bxl_service.close(function() {
			alert("close success");
		}, function(error) {
			alert("close: " + error);
		});
	},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
     console.log("@@@@@@");
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();