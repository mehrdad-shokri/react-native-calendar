import LocalizedStrings from 'react-native-localization';
import enTranslations from '../translations/en';
import faTranslations from '../translations/fa';

export const DEFAULT_LANGUAGE = 'fa';
const translations = {
  en: enTranslations,
  fa: faTranslations,
};

export default new LocalizedStrings(translations);
