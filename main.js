console.log("js is online");
$.getJSON("mockMessages.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});


var messageDivTemplate = "      <div class=\"chatMessage\"> "+
      "  <span class=\"ipOfSender\">10.0.0.127</span> " +
    "    <span class=\"dateOfMessage\">10/7/2017 20:23</span>  " +
    "    <span class =\"messageBody\"> but if you see this, its a bug</span> " +
  "    </div>";

function jsonToHtml(json) {
  <div class="chatMessage">
    <span class="ipOfSender">10.0.0.127</span>
    <span class="dateOfMessage">10/7/2017 20:23</span>
    <span class ="messageBody"> but if you see this, its a bug</span>
  </div>
}
