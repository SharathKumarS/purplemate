import type { Metadata } from "next"
import { RemoteWorkers } from "@/components/pages/remote-workers"

export const metadata: Metadata = {
  title: "Remote Workers - Find Your Dream Remote Job | PurpleMate",
  description:
    "Discover amazing remote job opportunities from top companies worldwide. Work from anywhere and build your career on your terms.",
}

const RemoteWorkersPage = () => {
  return (
    <main>
      <RemoteWorkers />
    </main>
  )
}

export default RemoteWorkersPage
