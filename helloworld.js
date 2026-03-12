UI.onEvent(function (eventType, data) {
  UI.log("Event type: " + eventType);
  UI.log("Event data: " + JSON.stringify(data));

  if (eventType === "uiAction") {
    if (data.id === "customButton") {
      UI.alert("Custom button clicked!");
    }
  }
});

var html =
  "<style>\n" +
  "    #customButton:hover {\n" +
  "        background-color: darkblue !important;\n" +
  "    }\n" +
  "    #customButton:active {\n" +
  "        background-color: navy !important;\n" +
  "    }\n" +
  "</style>\n" +
  "<div style='box-sizing:border-box;width:100%;height:100%;border:1px solid rgb(235, 235, 235);background-color: white;border-radius:2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);'>\n" +
  "    <div style='padding-right:10px;left:0px;top:0px;width:100%;height:37px;'>\n" +
  "            Custom UI\n" +
  "    </div>\n" +
  "    <div style='padding: 0 10px 10px 10px'>\n" +
  "        <p>Custom button</p>\n" +
  "        <button id='customButton' style='padding: 10px 20px; background-color: blue; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>button</button>\n" +
  "    </div>\n" +
  "</div>";

UI.setHtml(html);
