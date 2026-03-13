var html =
"<div id='customButton {0}' ui-actions='click'>\n" +
"   <style>\n" +
"      .reltio-btb-button {\n" +
"         background-color: #337ab7;\n" +
"         border: 1px solid #2e6da4;\n" +
"         text-align: center;\n" +
"         border-radius: 4px;\n" +
"         display: block;\n" +
"         cursor: pointer;\n" +
"         color: #ffffff;\n" +
"         font-family: Arial;\n" +
"         font-size: 14px;\n" +
"         height: 32px;\n" +
"         line-height: 32px;\n" +
"      }\n" +
"      .reltio-btb-button-normal {\n" +
"         background-color: #337ab7;\n" +
"         border: 1px solid #2e6da4;\n" +
"      }\n" +
"      .reltio-btb-button-normal:hover, .reltio-btb-button-normal:focus, .reltio-btb-button-normal:active {\n" +
"         background-color: #286090;\n" +
"         border: 1px solid #204d74;\n" +
"      }\n" +
"      .reltio-btb-button-disabled {\n" +
"         cursor: not-allowed;\n" +
"         opacity: 0.65;\n" +
"      }\n" +
"      .reltio-btb-button-fail {\n" +
"         background-color: #c9302c;\n" +
"         border: 1px solid #ac2925;\n" +
"      }\n" +
"      .reltio-btb-button-success {\n" +
"         background-color: #449d44;\n" +
"         border: 1px solid #398439;\n" +
"      }\n" +
"      @keyframes reltio-spinner {\n"+
"          to {transform: rotate(360deg);}\n"+
"      }\n"+
"      @-webkit-keyframes reltio-spinner {\n"+
"          to {-webkit-transform: rotate(360deg);}\n"+
"      }\n"+
"      .reltio-spinner {\n"+
"          min-width: 24px;\n"+
"          min-height: 24px;\n"+
"      }\n"+
"      .reltio-spinner:before {\n"+
"          content: '';\n"+
"          position: absolute;\n"+
"          top: 50%;\n"+
"          width: 16px;\n"+
"          height: 16px;\n"+
"          margin-top: -10px;\n"+
"          margin-left: -24px;\n"+
"      }\n"+
"      .reltio-spinner:not(:required):before {\n"+
"          content: '';\n"+
"          border-radius: 50%;\n"+
"          border: 2px solid transparent;\n"+
"          border-top-color: #fff;\n"+
"          border-bottom-color: #fff;\n"+
"          animation: reltio-spinner .8s ease infinite;\n"+
"          -webkit-animation: reltio-spinner .8s ease infinite;\n"+
"      }\n" +
"   </style>\n" +
"   {1}\n" +
"</div>";

UI.onEvent(function (eventType, data) {
    UI.log('Event Type: ' + eventType);
    
  if(eventType === 'uiAction' && data.id === 'customButton' && data.type === 'click') {
    UI.openSearch({});

    UI.log('Button clicked!');
  }
});
