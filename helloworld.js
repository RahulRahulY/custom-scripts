var html =
  "<div style='width:100%;height:100%;border:1px solid rgb(235, 235, 235);background-color: white;border-radius:2px; display:flex;flex-direction:column;'>\n" +
  "    <div style='font-family: Arial, sans-serif; font-size: 13px; color: rgb(51, 51, 51); font-weight: bold; width: 100%; height: 18px;'>\n" +
  "            EM\n" +
  "        </div>\n" +
  "    <div style='flex:1;padding: 0px 10px 10px;overflow:auto'>\n" +
  "        <p>EM Actions</p>\n" +
  "        <button id='customButton' ui-actions='click' style='padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>Click Me</button>\n" +
  "    </div>\n" +
  "</div>";

UI.setHtml(html);

UI.onEvent(function (eventType, data) {
  UI.log("Event Type: " + eventType);

  if (
    eventType === "uiAction" &&
    data.id === "customButton" &&
    data.type === "click"
  ) {
    UI.log("Button clicked!");

    UI.getEntity().then(function (entity) {
      UI.log("Current Entity: ", entity);
    });
  }
});
