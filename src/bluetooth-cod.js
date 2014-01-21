exports.decode = function(dec) {
   var majorClass = function() {
      var majorTable = [];
      majorTable.push("Misc"); // 0 0 0 0 0
      majorTable.push("Computer"); // 0 0 0 0 1
      majorTable.push("Phone"); // 0 0 0 1 0
      majorTable.push("LAN"); // 0 0 0 1 1

      majorTable.push("Audio/Video"); // 0 0 1 0 0
      majorTable.push("Peripheral"); // 0 0 1 0 1
      majorTable.push("Imaging"); // 0 0 1 1 0
      majorTable.push("Wearable"); // 0 0 1 1 1
      majorTable.push("Toy"); // 0 1 0 0 0
      majorTable.push("Health"); // 0 1 0 0 1

      var n = 8;
      var shift = new Array(n+1).join("0"); 
      return majorTable[(dec&parseInt("1111"+shift,2))>>n] || "Unknown";
   }  
   var majorServices = function() {
      var majorTable = [];
      majorTable[0] = "Information";
      majorTable[1] = "Telephony";
      majorTable[2] = "Audio";
      majorTable[3] = "Object Transfer";
      majorTable[4] = "Capturing";
      majorTable[5] = "Rendering";
      majorTable[6] = "Networking";
      majorTable[7] = "Positioning";
      majorTable[8] = "(reserved)";
      majorTable[9] = "(reserved)";
      majorTable[10] = "Limited Discoverable Mode";
      var i = dec.toString(2).indexOf("1");
      var services = [];
      for (var i = 0; i <= 9;i++) { 
         if (dec.toString(2)[i]=="1") {
            services.push(majorTable[i]);
         }
      }
      return services;
   }
   return {dclass:majorClass(),dservices:majorServices()};
};
