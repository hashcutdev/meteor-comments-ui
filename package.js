Package.describe({
  name: 'arkham:comments-ui',
  summary: 'Simple templates for disqus-like comment functionality',
  version: '1.4.4',
  git: 'https://github.com/komentify/meteor-comments-ui.git'
});

Npm.depends({
  linkifyjs: '2.0.2',
  'simpl-schema': '0.3.1',
});

Package.onUse(function(api) {
  // Meteor Version
  api.versionsFrom('METEOR@1.4.4');

  // Meteor Core Dependencies
  api.use(['accounts-password@1.0.1'], { weak: true });
  api.use([
    'accounts-base',
    'ecmascript',
    'underscore',
    'mongo-livedata',
    'templating',
    'jquery',
    'check',
    'less@2.5.0_2',
    'tracker',
    'check',
    'random',
    'markdown',
    'reactive-dict',
  ]);

  // Atmosphere Package Dependencies
    api.use([
	'aldeed:schema-deny@2.0.0',
    'aldeed:collection2-core@2.0.1', 'dburles:collection-helpers@1.0.3',
    'momentjs:moment@2.10.6', 'reywood:publish-composite@1.4.2',
    'aldeed:template-extension@4.0.0', 'barbatus:stars-rating@1.0.7'
  ]);

  // Package specific globals and files
  api.addFiles([
    'lib/collections/anonymous-user.js',
    'lib/collections/comments.js',
    'lib/collections/methods/anonymous-user.js',
    'lib/collections/methods/comments.js',
  ]);

  api.addFiles([
    'lib/services/media-analyzers/image.js',
    'lib/services/media-analyzers/youtube.js',
    'lib/services/user.js',
    'lib/services/time-tick.js',
    'lib/services/media.js',
    'lib/components/commentsBox/commentsBox.html',
    'lib/components/commentsBox/commentsBox.less',
    'lib/components/commentsSingleComment/commentsSingleComment.html',
    'lib/components/commentsTextarea/commentsTextarea.html',
    'lib/components/commentsSubheader/commentsSubheader.html',
    'lib/components/commentsList/commentsList.html',
    'lib/api.js',
  ]);

  api.addFiles([
    'lib/components/helpers.js',
    'lib/components/commentsBox/commentsBox.js',
    'lib/components/commentsSingleComment/commentsSingleComment.js',
    'lib/components/commentsTextarea/commentsTextarea.js',
    'lib/components/commentsSubheader/commentsSubheader.js',
    'lib/components/commentsList/commentsList.js',
  ], 'client');

  api.addFiles([
    'lib/server/publish.js',
    'lib/services/hashing.js',
    'lib/comment-status-api.js',
    'lib/server/api.js',
  ], 'server');

  api.export('Comments');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'accounts-password', 'ecmascript', 'audit-argument-checks', 'check']);
  api.use('arkham:comments-ui');

  api.addFiles(['tests/api-tests.js', 'tests/reply-service-tests.js']);
  api.addFiles('tests/ui-tests.js', 'client');
});
