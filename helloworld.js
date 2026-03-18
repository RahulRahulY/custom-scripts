let html =
  "<div style='border:1px solid rgb(235, 235, 235);background-color: white;border-radius:2px;'>\n" +
  "    <div style='padding: 0px 10px 10px;overflow:auto'>\n" +
  "        <h2>EM Integration</h2>\n" +

  "        <div style='margin: 10px 0;'>\n" +
  "            <p>Enity Name: <span id='entityName'>-</span></p>\n" +
  "            <p>Crosswalks Count: <span id='crosswalkCount'>-</span></p>\n" +
  "        </div>\n" +
  "    </div>\n" +
  "    <button id='customButton' ui-actions='click' style='padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>Button</button>\n" +
  "</div>";

UI.setHtml(html);

UI.getEntity().then(function (entity) {
  UI.log("Entity: " + JSON.stringify(entity));
  
  let label = entity.label || "-";
  let crosswalksCount = entity.crosswalks.length || 0;
  
  UI.setChildHtml("entityName", label);
  UI.setChildHtml("crosswalkCount", crosswalksCount.toString());
});

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

UI.getConfiguration().then(function (config) {
  UI.log("Configuration: " + JSON.stringify(config));
});

UI.getUiConfiguration().then(function (uiConfig) {
  UI.log("UI Configuration: " + JSON.stringify(uiConfig));
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
  }
});
