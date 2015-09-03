/**
  Show message in message-area
*/

showMsg=function(text,time) {
  $("#msgarea").text(text);
  setTimeout(function() {
               $("#msgarea").html("&nbsp;");
             }, time);
};

/**
  Handle action connect
*/

handlePPP0up=function() {
  $.post("php/ppp0up.php");
  showMsg("Connecting...",2000);
};

/**
  Handle action disconnect
*/

handlePPP0down=function() {
  $.post("php/ppp0down.php");
  showMsg("Disconnecting...",2000);
};

/**
  Handle action shutdown
*/

handleShutdown=function() {
  $.post("php/shutdown.php");
  showMsg("Shutting the system down...",2000);
};

/**
  Handle action reboot
*/

handleReboot=function() {
  $.post("php/reboot.php");
  showMsg("Rebooting the system down...",2000);
};

/**
  Update status information
*/

var conStatus="";
updateStatus=function() {
    $.getJSON("php/getstatus.php", function( data ) {
      if (data.constatus == 'down' && conStatus!="down") {
        showMsg("no connection!",2000);
      }
      conStatus=data.constatus;
      $("#constatus").text(data.constatus);
      $("#contime").text(data.contime);
      $("#localip").text(data.localip);
      $("#remoteip").text(data.remoteip);
      $("#conclients").text(data.conclients);
    });
};
  
