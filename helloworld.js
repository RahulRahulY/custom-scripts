let html =
  "<div style='background-color: white;display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;border-radius:4px;margin:0;overflow:hidden;box-shadow: inset 0 0 1px 2px rgba(0, 0, 0, 0.05)'>\n" +
  "    <div style='padding: 8px 0px 12px 14px;overflow:auto;flex:1 1 auto;box-sizing:border-box'>\n" +
  "        <p style='font-size: 18px; font-weight: 400; margin: 10px 0;'>Entity Details</p>\n" +
  "        <div style='margin: 10px 0;'>\n" +
  "            <p style='font-size: 14px; color: #666;'>Entity Id: <span id='entityId' style='color: #333;'></span></p>\n" +
  "            <p style='font-size: 14px; color: #666;'>Entity Name: <span id='entityName' style='color: #333;'></span></p>\n" +
  "        </div>\n" +
  "    </div>\n" +
  "    <div style='padding: 10px; display: flex; justify-content: flex-end;'>\n" +
  "        <button id='customButton' ui-actions='click' style='padding: 10px 20px; background-color:#337ab7; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>Button</button>\n" +
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
      let [, entityId] = entity.uri.split("/");

      UI.setChildHtml("entityName", entity.label);
      UI.setChildHtml("entityId", entityId);
    });
  }
});

UI.api(
  "https://raw.githubusercontent.com/RahulRahulY/custom-scripts/refs/heads/main/test.json",
  "GET",
)
  .then(function (response) {
    UI.log("API Response: ", JSON.stringify(response));
  })
  .catch(function (error) {
    UI.log("API Error: ", error);
  });
