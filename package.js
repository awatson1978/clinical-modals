Package.describe({
  name: 'clinical:modals',
  version: '0.0.3',
  summary: 'Modal dialogs for the Clinical Meteor track.',
  git: 'https://github.com/awatson1978/clinical-modals',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');

  api.addFiles('client/modals.less', 'client');
  api.addFiles('client/modals.js', 'client');

  api.addFiles('client/configListModal/configListModal.html', 'client');
  api.addFiles('client/configListModal/configListModal.js', 'client');
  api.addFiles('client/configListModal/configListModal.less', 'client');

  api.addFiles('client/confirmModal/confirmModal.html', 'client');
  api.addFiles('client/confirmModal/confirmModal.js', 'client');
  api.addFiles('client/confirmModal/confirmModal.less', 'client');

  api.addFiles('client/promptModal/promptModal.html', 'client');
  api.addFiles('client/promptModal/promptModal.js', 'client');
  api.addFiles('client/promptModal/promptModal.less', 'client');

  api.addFiles('client/keybindingsModal/keybindingsModal.html', 'client');
  api.addFiles('client/keybindingsModal/keybindingsModal.js', 'client');
  api.addFiles('client/keybindingsModal/keybindingsModal.less', 'client');

  api.export('keybindingsModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:keybindings');
  api.addFiles('tests/modals.js');
});
