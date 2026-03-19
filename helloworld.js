let html =
  "<div style='background-color: white;display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;border-radius:4px;margin:0;overflow:hidden;box-shadow: inset 0 0 1px 2px rgba(0, 0, 0, 0.05)'>\n" +
  
  "    <div style='padding: 8px 0px 12px 14px;overflow:auto;flex:1 1 auto;box-sizing:border-box'>\n" +
  "        <p style='font-size: 18px; font-weight: 400; margin: 10px 0;'>EM Integration</p>\n" +
  "        <div style='margin: 10px 0;'>\n" +
  "            <p style='font-size: 14px; color: #666;'>Entity Id: <span id='crosswalkCount' style='color: #333;'></span></p>\n" +
  "            <p style='font-size: 14px; color: #666;'>Enity Name: <span id='entityName' style='color: #333;'></span></p>\n" +
  "        </div>\n" +
  "    </div>\n" +
  "    <div style='padding: 10px; display: flex; justify-content: flex-end;'>\n" +
  "        <button id='customButton' ui-actions='click' style='padding: 10px 20px; background-color:#337ab7; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>Button</button>\n" +
  "    </div>\n" +
  "</div>";

UI.setHtml(html);

UI.getEntityUri().then(function (entityUri) {
  UI.log("Entity URI: " + entityUri);
});

UI.getApiPath().then(function (apiPath) {
  UI.log("API Path: " + apiPath);
});

UI.getTenant().then(function (tenant) {
  UI.log("Tenant: " + tenant);
});

UI.getPerspective().then(function (perspective) {
  UI.log("Perspective: " + perspective);
});

UI.getSearchQuery().then(function (query) {
  UI.log("Search Query: " + query);
});

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
      UI.setChildHtml("crosswalkCount", entityId);
    });
  }
});
