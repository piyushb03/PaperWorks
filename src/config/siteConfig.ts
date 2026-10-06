export interface SiteConfig {
  businessName: string;
  tagline: string;
  positioning: string;
  siteUrl: string;
  telegramUrl: string;
  contactEmail: string;
  gaMeasurementId?: string;
  hours: string;
  responseTime: string;
}

export const siteConfig: SiteConfig = {
  businessName: 'PaperWorks',
  tagline: 'Research. Projects. Professional Documents.',
  positioning: 'Research, Project & Professional Document Support',
  siteUrl: (import.meta.env.VITE_SITE_URL || 'https://paperworks.pro').replace(/\/+$/, ''),
  telegramUrl: import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/paperworkssupport',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contact@paperworks.pro',
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  hours: 'Monday – Saturday, 9:00 AM – 8:00 PM IST',
  responseTime: 'Usually within 1–3 hours during working hours',
};

export const getTelegramLinkWithService = (serviceName?: string): string => {
  const base = siteConfig.telegramUrl;
  if (!serviceName) return base;
  // If Telegram URL is a username link like https://t.me/username, append ?text=...
  const encodedText = encodeURIComponent(`Hi PaperWorks, I would like to discuss support for: ${serviceName}.`);
  return base.includes('?') ? `${base}&text=${encodedText}` : `${base}?text=${encodedText}`;
};

export const getMailtoLink = (subject?: string, body?: string): string => {
  const email = siteConfig.contactEmail;
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${params.length ? `?${params.join('&')}` : ''}`;
};
