UI.onEvent(function (eventType, data) {
  UI.log("Event type: " + eventType);
  UI.log("Event data: " + JSON.stringify(data));

  //   if (eventType === "uiAction") {
  //     if (data && data.id === "customButton") {
  //       UI.alert("Custom button clicked!");
  //     }
  //   }
});

var html =
  "<div>" +
  "  <button id='customButton' data-action='click'>Click Me</button>" +
  "</div>";

UI.setHtml(html);
