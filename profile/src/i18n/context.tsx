import { createContext, useContext, type ReactNode } from 'react';
import type { Dictionary } from './types';

const I18nContext = createContext<Dictionary | null>(null);

export function I18nProvider({ messages, children }: { messages: Dictionary; children: ReactNode }) {
  return <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>;
}

export function useI18n(): Dictionary {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return value;
}
