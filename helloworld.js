var html =
  "<div style='overflow-x:hidden;overflow-y:hidden;box-sizing:border-box;position:absolute;-webkit-user-select:none;cursor:default;width:100%;height:100%;border:1px solid rgb(235, 235, 235);background-color: white;border-radius:2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);'>\n" +
  "    <div style='overflow-x:hidden;overflow-y:hidden;z-index:10;box-sizing:border-box;position:relative;-webkit-user-select:none;cursor:default;padding-right:10px;left:0px;top:0px;width:100%;height:37px;'>\n" +
  "        <div style='overflow: hidden; white-space: nowrap; text-overflow: ellipsis; touch-action: none; z-index: 10; box-sizing: border-box; position: absolute; -webkit-user-select: text; font-family: Arial, sans-serif; font-size: 13px; line-height: 1.4; color: rgb(51, 51, 51); font-weight: bold; left: 10px; top: 10px; width: 100%; height: 18px;'>\n" +
  "            Custom UI\n" +
  "        </div>\n" +
  "    </div>\n" +
  "    <div style='overflow-x:hidden;overflow-y:hidden;box-sizing:border-box;position:relative;-webkit-user-select:none;cursor:default;padding:10px;left:0px;top:0px;width:100%;height:100%;'>\n" +
  "        <p>Custom button</p>\n" +
  "        <button id='customButton' style='padding: 10px 20px; background-color: blue; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;'>button</button>\n" +
  "    </div>\n" +
  "</div>";

UI.setHtml(html);

UI.onEvent(function(type, data) {
  if(type === 'uiAction' && data.id === 'customButton' && data.type === 'click') {
    UI.alert("clicked");
    UI.log('clicked');
  }
});

