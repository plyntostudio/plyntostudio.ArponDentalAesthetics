import { SITE_CONFIG } from '@/lib/constants';

export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    ...SITE_CONFIG.schema,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
