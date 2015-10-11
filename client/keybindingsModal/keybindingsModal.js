Meteor.startup(function () {
  Session.setDefault('show_keybindings', false);


  Mousetrap.bind('ctrl+command+k', function () {
    Session.toggle('show_keybindings');
    Session.toggle('show_reactive_overlay');
  });
  Mousetrap.bind('ctrl+command+i', function () {
    Session.toggle('showInboxCard');
    Session.toggle('showOutboxCard');
  });
  Mousetrap.bind('ctrl+command+a', function () {
    Session.toggle('showAccountCard');
    Session.toggle('showThemeCard');
    Session.toggle('showProfileCard');
  });

});


Template.keybindingsModal.events({
  "click #modalOkButton": function (event, template) {
    Session.set('show_keybindings', false);
    Session.set('show_reactive_overlay', false);
  }
});


Template.keybindingsModal.helpers({
  getVisibility: function () {
    if (Session.get('show_keybindings')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});
