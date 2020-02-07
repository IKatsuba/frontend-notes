module.exports = {
  name: 'frontend-notes',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/frontend-notes',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
