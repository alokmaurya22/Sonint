interface SEOHeadProps {
  jsonLd?: object;
  children?: React.ReactNode;
}

export function SEOHead({ jsonLd, children }: SEOHeadProps) {
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}