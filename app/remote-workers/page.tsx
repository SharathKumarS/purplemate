import type { Metadata } from "next"
import { RemoteWorkers } from "@/components/pages/remote-workers"

export const metadata: Metadata = {
  title: "Remote Workers - Hire Talent",
  description: "Find and hire top remote workers for your business.",
}

const RemoteWorkersPage = () => {
  return (
    <main>
      <RemoteWorkers />
    </main>
  )
}

export default RemoteWorkersPage
