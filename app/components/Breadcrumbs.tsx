"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname()

  // If no custom items provided, generate from pathname
  const breadcrumbItems = items || generateBreadcrumbs(pathname)

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="flex items-center hover:text-purple-600 transition-colors">
        <Home className="w-4 h-4" />
      </Link>

      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-purple-600 transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  let currentPath = ""

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Format segment name
    let label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Custom labels for specific routes
    if (segment === "discover") label = "Discover Sessions"
    if (segment === "students") label = "Study Sessions"
    if (segment === "remote-workers") label = "Co-working Sessions"
    if (segment === "host") label = "Host a Session"
    if (segment === "auth") label = "Authentication"

    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })

  return breadcrumbs
}
