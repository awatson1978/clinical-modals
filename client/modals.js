

Template.registerHelper("getModalPosition", function (argument){
  return parseStyle({
    //"left": Session.get('transparencyDivLeft') + "px; top: 100px;"
    "left": Session.get('transparencyDivLeft') - 8 + "px; top: 90px;"
  });
});
Template.registerHelper("getVerticalModal", function (argument){
  return parseStyle({
    "left": Session.get('transparencyDivLeft') + "px; top: 100px !important; position:absolute; height: " + ($(window).height() - 200) + "px;"
  });
});


parseStyle = function (json) {
  var result = "";
  $.each(json, function (i, val) {
    result = result + i + ":" + val + " ";
  });
  return result;
};
