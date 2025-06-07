"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  homeHref?: string
  homeLabel?: string
  className?: string
}

export default function Breadcrumbs({
  items = [],
  homeHref = "/",
  homeLabel = "Home",
  className = "",
}: BreadcrumbsProps) {
  const pathname = usePathname()

  // If no items are provided, generate them from the pathname
  const breadcrumbs = items.length > 0 ? items : generateBreadcrumbs(pathname, homeHref, homeLabel)

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <ol className="flex items-center flex-wrap">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            {breadcrumb.active ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-gray-500 hover:text-purple-600 transition-colors flex items-center"
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string, homeHref: string, homeLabel: string): BreadcrumbItem[] {
  const paths = pathname.split("/").filter(Boolean)

  // Start with home
  const breadcrumbs: BreadcrumbItem[] = [{ label: homeLabel, href: homeHref, active: paths.length === 0 }]

  // Build up the breadcrumbs based on the path
  let currentPath = ""

  paths.forEach((path, index) => {
    currentPath += `/${path}`
    const isLast = index === paths.length - 1

    // Format the label (capitalize, replace hyphens with spaces)
    let label = path.replace(/-/g, " ")
    label = label.charAt(0).toUpperCase() + label.slice(1)

    // Special cases for specific paths
    if (path === "discover") label = "Discover Sessions"
    if (path === "host") label = "Host a Session"
    if (path === "session") label = "Session Details"
    if (path === "students") label = "For Students"
    if (path === "remote-workers") label = "For Remote Workers"

    breadcrumbs.push({
      label,
      href: currentPath,
      active: isLast,
    })
  })

  return breadcrumbs
}
