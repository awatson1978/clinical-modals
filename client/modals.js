

Template.registerHelper("getModalPosition", function (argument){
  return parseStyle({
    //"left": Session.get('mainPanelLeft') + "px; top: 100px;"
    "left": Session.get('mainPanelLeft') - 8 + "px; top: 90px;"
  });
});
Template.registerHelper("getVerticalModal", function (argument){
  return parseStyle({
    "left": Session.get('mainPanelLeft') + "px; top: 100px !important; position:absolute; height: " + ($(window).height() - 200) + "px;"
  });
});

// TODO:  add a dependency to photonic:style package
// extract this to external object
parseStyle= function (json) {
  var result = "";
  $.each(json, function (i, val) {
    result = result + i + ":" + val + " ";
  });
  return result;
};
