var html = "<div style='padding: 20px;'>" +
  "<button id='customButton' ui-actions='click' style='padding: 10px 20px; background-color: blue; color: white; border: none; border-radius: 4px; cursor: pointer;'>Button</button>" +
  "</div>";

UI.setHtml(html);

UI.onEvent(function (eventType, data) {
    UI.log('Event Type: ' + eventType);
    
  if(eventType === 'uiAction' && data.id === 'customButton' && data.type === 'click') {
    UI.openSearch({});
  }
});
