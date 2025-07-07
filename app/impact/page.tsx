import type { Metadata } from "next"
import ImpactPageClient from "./ImpactPageClient"

export const metadata: Metadata = {
  title: "Our Impact | Ethiopian Social Partnership Advocacy (ESPA)",
  description:
    "Discover the measurable impact of ESPA's work in human rights advocacy, democratic education, and community empowerment across Ethiopia. See our achievements and success stories.",
  keywords:
    "ESPA impact, human rights impact Ethiopia, democratic education results, community empowerment statistics, Ethiopian NGO achievements",
  openGraph: {
    title: "Our Impact | Ethiopian Social Partnership Advocacy (ESPA)",
    description:
      "Measurable impact in human rights advocacy, democratic education, and community empowerment across Ethiopia.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Impact | Ethiopian Social Partnership Advocacy (ESPA)",
    description: "See the measurable impact of our work in human rights advocacy and community empowerment.",
  },
  alternates: {
    canonical: "/impact",
  },
}

export default function ImpactPage() {
  return (
    <>
      <ImpactPageClient />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Impact - Ethiopian Social Partnership Advocacy",
            description:
              "Measurable impact of ESPA's work in human rights advocacy, democratic education, and community empowerment across Ethiopia.",
            url: "https://espa-ethiopia.org/impact",
            mainEntity: {
              "@type": "Organization",
              name: "Ethiopian Social Partnership Advocacy",
              alternateName: "ESPA",
              impact: {
                livesImpacted: 25000,
                communitiesServed: 102,
                programsDelivered: 63,
                yearsOfService: 8,
              },
            },
          }),
        }}
      />
    </>
  )
}
