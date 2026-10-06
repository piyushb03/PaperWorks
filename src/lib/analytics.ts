import { siteConfig } from '../config/siteConfig';

export type AnalyticsEvent = 
  | 'telegram_click'
  | 'email_click'
  | 'service_view'
  | 'resource_view'
  | 'cta_click';

export const trackEvent = (eventName: AnalyticsEvent, params?: Record<string, unknown>): void => {
  if (!siteConfig.gaMeasurementId || typeof window === 'undefined') {
    return;
  }

  const win = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof win.gtag === 'function') {
    win.gtag('event', eventName, params);
  }
};
