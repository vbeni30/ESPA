import type { Metadata } from "next"
import ImpactPageClient from "./ImpactPageClient"

export const metadata: Metadata = {
  title: "Our Impact | Ethiopian Social Partnership Advocacy (ESPA)",
  description:
    "Discover the measurable impact ESPA has made in human rights advocacy, democratic education, and community empowerment across Ethiopia. See our achievements and success stories.",
  keywords:
    "ESPA impact, human rights results, democratic education outcomes, community empowerment Ethiopia, social change metrics, Ethiopian NGO achievements",
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
    description: "See the measurable impact ESPA has made in human rights advocacy and community empowerment.",
  },
  alternates: {
    canonical: "/impact",
  },
}

export default function ImpactPage() {
  return <ImpactPageClient />
}
