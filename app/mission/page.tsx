import type { Metadata } from "next"
import MissionPageClient from "./MissionPageClient"

export const metadata: Metadata = {
  title: "Our Mission | Ethiopian Social Partnership Advocacy (ESPA)",
  description:
    "ESPA is committed to ensuring human rights, promoting democratic values, and providing holistic support to marginalized communities through advocacy, education, and service across Ethiopia.",
  keywords:
    "ESPA mission, human rights Ethiopia, democratic education, social advocacy, marginalized communities, Ethiopian NGO",
  openGraph: {
    title: "Our Mission | Ethiopian Social Partnership Advocacy (ESPA)",
    description:
      "Advocating for human rights, promoting democracy, and empowering communities across Ethiopia through education, advocacy, and service.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Mission | Ethiopian Social Partnership Advocacy (ESPA)",
    description: "Advocating for human rights, promoting democracy, and empowering communities across Ethiopia.",
  },
  alternates: {
    canonical: "/mission",
  },
}

export default function MissionPage() {
  return <MissionPageClient />
}
