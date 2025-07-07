import { cn } from "@/lib/utils"
import type { HTMLAttributes, PropsWithChildren } from "react"

/**
 * A simple wrapper around the native <section> element that
 * forwards the `className` prop so you can keep your markup clean.
 *
 * Example:
 *  <Section className="py-24 bg-gray-50">
 *    ...content...
 *  </Section>
 */
export default function Section({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <section className={cn("w-full", className)} {...props}>
      {children}
    </section>
  )
}
