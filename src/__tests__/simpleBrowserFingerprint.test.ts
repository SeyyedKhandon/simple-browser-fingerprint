import simpleBrowserFingerprint from '../index';

test('i18nTranslatorForJsonTemplates', () => {
  expect(simpleBrowserFingerprint()).toContain('appCodeName');
});
