import AdminLayout from "@/layouts/AdminLayout"
import { io } from "socket.io-client"
import * as React from "react"
import { handleToastNotifications } from "@/shared/hooks/useToastify"

export default function DashboardPage() {
  const sendNotification = (message: string) => {
    // const socket = io("http://localhost:3000")
    // socket.emit(message)
    handleToastNotifications(message, null)
  }

  return (
    <div>
      <p>Dashboard</p>
      <div className="space-x-2">
        <button
          className="rounded-md bg-blue-800 px-3 py-2 text-white shadow-md"
          onClick={(e) => {
            e.preventDefault()
            sendNotification("Approve Success")
          }}
        >
          Approve
        </button>
        <button
          className="rounded-md bg-red-800 px-3 py-2 text-white shadow-md"
          onClick={(e) => {
            e.preventDefault()
            sendNotification("Reject Success")
          }}
        >
          Reject
        </button>
      </div>
    </div>
  )
}

DashboardPage.getLayout = (page: React.ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>
}
