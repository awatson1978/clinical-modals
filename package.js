Package.describe({
  name: 'clinical:modals',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Modal dialogs for the Clinical Meteor track.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awatson1978/clinical-modals',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');
  //api.use('clinical:overlays');

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

  api.addFiles('lib/modals.js');

  api.export('Modals');
  api.export('confirmModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:modals');
  api.addFiles('modals-tests.js');
});
