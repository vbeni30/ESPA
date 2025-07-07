import type { Metadata } from "next"
import MissionPageClient from "./MissionPageClient"

export const metadata: Metadata = {
  title: "Our Mission | Ethiopian Social Partnership Advocacy (ESPA)",
  description:
    "Learn about ESPA's mission to advocate for human rights, promote democratic values, and provide holistic support to marginalized communities across Ethiopia.",
  keywords:
    "ESPA mission, human rights advocacy, democratic education, social justice Ethiopia, community empowerment, Ethiopian NGO",
  openGraph: {
    title: "Our Mission | Ethiopian Social Partnership Advocacy (ESPA)",
    description:
      "ESPA's mission to advocate for human rights, promote democratic values, and provide holistic support to marginalized communities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Mission | Ethiopian Social Partnership Advocacy (ESPA)",
    description: "Learn about ESPA's mission to advocate for human rights and promote democratic values in Ethiopia.",
  },
  alternates: {
    canonical: "/mission",
  },
}

export default function MissionPage() {
  return <MissionPageClient />
}
