export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Α.Σ. Αθηνά",
    alternateName: "A.C. Athina",
    url: "https://www.athina-ac.gr",
    email: "info@athina-ac.gr",
    telephone: "+306955194933",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ag. Fotinis 33",
      addressLocality: "Nea Smyrni",
      addressRegion: "Athens",
      postalCode: "17121",
      addressCountry: "GR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}