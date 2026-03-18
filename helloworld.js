let html =
  "<div style='border:1px solid rgb(235, 235, 235);background-color: white;border-radius:2px; display:flex;flex-direction:column'>\n" +
  "    <div style='padding: 0px 10px 10px;overflow:auto'>\n" +
  "        <p style='font-size: 18px; font-weight: 400; margin: 10px 0;'>EM Integration</p>\n" +
  "        <div style='margin: 10px 0;'>\n" +
  "            <p style='font-size: 14px; color: #666;'>Enity Name: <span id='entityName' style='color: #333;'>-</span></p>\n" +
  "            <p style='font-size: 14px; color: #666;'>Crosswalks Count: <span id='crosswalkCount' style='color: #333;'>-</span></p>\n" +
  "        </div>\n" +
  "    </div>\n" +
  "    <div style='padding: 10px;'>\n" +
  "        <button id='customButton' ui-actions='click' style='padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>Button</button>\n" +
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
  }
});

Promise.all([
  UI.getApiPath(),
  UI.getTenant(),
  UI.getUiConfiguration(),
  UI.getEntity(),
]).then(function (values) {
  let config = values[2];
  let entity = values[3];

  UI.setHtml(
    html
      .replace("{0}", "reltio-btb-button-normal")
      .replace("{1}", config.label),
  );

  UI.setHtml(
    html
      .replace("{0}", "reltio-btb-button-disabled")
      .replace("{1}", config.label),
  );
});
