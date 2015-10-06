Package.describe({
  name: 'clinical:modals',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Modal dialogs for the Clinical Meteor track.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awatson1978/clinical-modals',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('less');
  api.use('awatson1978:fonts-helveticas');
  //api.use('clinical:overlays');

  api.addFiles('components/confirmModal/confirmModal.html', 'client');
  api.addFiles('components/confirmModal/confirmModal.js', 'client');
  api.addFiles('components/confirmModal/confirmModal.less', 'client');

  api.addFiles('components/keybindingsModal/keybindingsModal.html', 'client');
  api.addFiles('components/keybindingsModal/keybindingsModal.js', 'client');
  api.addFiles('components/keybindingsModal/keybindingsModal.less', 'client');

  api.addFiles('components/promptModal/promptModal.html', 'client');
  api.addFiles('components/promptModal/promptModal.js', 'client');
  api.addFiles('components/promptModal/promptModal.less', 'client');

  api.addFiles('lib/modals.js');

  api.export('Modals');
  api.export('confirmModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:modals');
  api.addFiles('modals-tests.js');
});
